// src/App.jsx
import { createBrowserRouter, RouterProvider ,Outlet } from 'react-router-dom';


// If GalleryNavigation/ has an index.js file, use this form:
// import GalleryNavigation from './components/GalleryNavigation';


import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation';
import GalleryView from './components/GalleryView/GalleryView';
// console.log(harvardArt);


function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}



const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: 
          <>
            <h2>Harvard Art Museum</h2>
            <p>
              Look, but Don&apos;t Touch. Please select a Gallery in the
              navigation bar.
            </p>
          </>
      },
      // {
      //   path:"galleries/:galleryId",
      //   element:<GalleryView />
      // },
      { 
        path: "*",
        element: <h2>Page Not Found</h2>
      }
    ]
  }
]);




function App() {
  return <RouterProvider router={router}/>;
}



export default App;
