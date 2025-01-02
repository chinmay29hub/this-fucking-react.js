import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Card,
  Spinner,
} from "react-bootstrap";

function App() {
  const [searchInput, setSearchInput] = useState("Kishore Kumar");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tokenParams = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        import.meta.env.VITE_SPOTIFY_CLIENT_ID +
        "&client_secret=" +
        import.meta.env.VITE_SPOTIFY_CLIENT_SECRET,
    };

    fetch("https://accounts.spotify.com/api/token", tokenParams)
      .then((result) => result.json())
      .then((data) => {
        setAccessToken(data.access_token);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (accessToken) {
      search();
    }
  }, [accessToken]);

  async function search() {
    if (!accessToken) {
      console.log("Access token is not available yet.");
      return;
    }

    console.log("Searching for " + searchInput);

    const searchParams = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    };

    const artistID = await fetch(
      "https://api.spotify.com/v1/search?q=" + searchInput + "&type=artist",
      searchParams
    )
      .then((response) => response.json())
      .then((data) => {
        return data.artists.items[0].id;
      });

    console.log("Artist Id: " + artistID);

    const getAlbums = await fetch(
      "https://api.spotify.com/v1/artists/" +
        artistID +
        "/albums" +
        "?include_groups=album&market=IN&limit=50",
      searchParams
    )
      .then((response) => response.json())
      .then((data) => setAlbums(data.items));
  }

  if (loading) {
    return (
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <>
      <Container className="mt-5">
        {" "}
        {/* Added mt-5 for top margin */}
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for Artist"
            type="input"
            value={searchInput}
            onKeyUp={(event) => {
              if (event.key === "Enter") {
                search();
              }
            }}
            onChange={(event) => {
              setSearchInput(event.target.value);
            }}
          />
          <Button
            onClick={() => {
              search();
            }}
          >
            Search
          </Button>
        </InputGroup>
      </Container>
      <Container>
        <Row className="mx-2 row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {albums.map((album) => (
            <Col key={album.id} className="d-flex">
              <Card className="mb-4 w-100">
                <Card.Img
                  variant="top"
                  src={album.images[0].url}
                  className="card-img-top"
                />
                <Card.Body>
                  <Card.Title>{album.name}</Card.Title>
                  <Card.Text>
                    <strong>Artist:</strong> {album.artists[0].name}
                    <br />
                    <strong>Release Date:</strong> {album.release_date}
                    <br />
                    <strong>Total Tracks:</strong> {album.total_tracks}
                  </Card.Text>
                  <Button
                    variant="primary"
                    href={album.external_urls.spotify}
                    target="_blank"
                  >
                    View on Spotify
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;
