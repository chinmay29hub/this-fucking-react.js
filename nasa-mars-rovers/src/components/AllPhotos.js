import React, { Component } from 'react'
import axios from 'axios'
import Top from './Navbar'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';


export default class AllPhotos extends Component {

    state = {
        date : "",
        user_date : "2023-01-11",
        images : [],
        length : Number,
        rover_name : ""
    }

    componentDidMount() {
        this.fetchImage(this.state.user_date)
    }

    fetchImage = (user_date) => {
        axios.get(`${process.env.REACT_APP_EARTH_DATE}${user_date}`)
            .then(response => {
                // console.log(response.data.photos.length)
                const length= response.data.photos.length
                // console.log(response.data.photos)
                const images = response.data.photos
                // console.log(images)
                this.setState({ images, length })
                images.forEach(element => {
                    (this.state.images).push(element)
                });
                console.log(this.state.images)
            })
            .catch(error => console.log(error))
    }

    handleChange = e => {
      this.setState({ user_date : e.target.value })
      this.fetchImage(this.state.user_date)
    }

    
    

  render() {
    const temp = this.state.images
    var curr = new Date();
    curr.setDate(curr.getDate());
    var date = curr.toISOString().substring(0,10);

    return (
      <>
      <Top />
      
      <Container fluid>
      <Form>
      <Form.Group className="mb-3">
        <Form.Label>Select an Earth Date</Form.Label>
        <Form.Control type="date" defaultValue="2023-01-11" onChange={ this.handleChange } name="dob" placeholder="Earth Date" />
      </Form.Group>
      <button style={{ display : "none" }} onClick={this.fetchImage(this.state.user_date)}>Fetch</button>
    </Form>
      <p>Photos For Selected Date (Give it time to load all images) : { this.state.user_date }</p>
      {/* <p>{ temp.map(element => element.earth_date) }</p> */}
      <Row>
      {temp.map((element, i, j, k ,l, m, n, p, f, o) => {
        return (
          <Col key={i} style={{ padding : "2%" }}>
          <Card key={j} style={{ width: '18rem' }}>
      <Card.Img key={k} variant="top" src={element.img_src} />
      <Card.Body key={l}>
        <Card.Title key={m}>Rover : { element.rover.name }</Card.Title>
        <Card.Text key={n}>
          Status : { element.rover.status }
        </Card.Text>
        <Card.Text key={p}>
          Launch Date : { element.rover.launch_date }
        </Card.Text>
        <Card.Text key={f}>
          Landing Date : { element.rover.landing_date }
        </Card.Text>
        <Card.Text key={o}>
          Photo Earth Date : { element.earth_date }
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
        )
      })
      }
      </Row>
      </Container>
      </>
      
    )
  }
}
