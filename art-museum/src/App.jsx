// src/App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


// If GalleryNavigation/ has an index.js file, use this form:
// import GalleryNavigation from './components/GalleryNavigation';


import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation';

// console.log(harvardArt);






const router = createBrowserRouter([
  {
    path: `/`,
    element: (
      <>
      <h2>Harvard Art Museum</h2>
      <p>Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar. </p>
      </>
    )
  },
  {
    path: "*",
    element: <h2>Page Not Found</h2>
  },
  {
    path:"galleries",
    element:<GalleryNavigation galleries={harvardArt.records}/>
  }
]);




function App() {
  return <RouterProvider router={router}/>;
}



export default App;
