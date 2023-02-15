// import logo from './logo.svg';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Curiosity from './components/Curiosity';
import Opportunity from './components/Opportunity';
import Spirit from './components/Spirit';
import AllPhotos from './components/AllPhotos';

const router = createBrowserRouter([
  {
      path : "/",
      element : <Curiosity />
  },
  {
      path : "/opportunity",
      element : <Opportunity />
  },
  {
      path : "/spirit",
      element : <Spirit />
  },
  {
    path : "allphotos",
    element : <AllPhotos />
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
  </main>
  );
}

export default App;
