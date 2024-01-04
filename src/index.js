import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css"
import App from './App';
import About from './components/About';
import Error from './components/Error';
import Body from './components/Body';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu1';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
/* //Header
         // -logo
         // -navbar
        //Body
          //-Search bar
          //-restraunt list
            // -restraunt card
            //   -Image
            //   -description
            //   -Rating
            //   -cusines
        //footer
          -link
          -copyright
    */
   //createBrowserRouter is an array of list of path, where each path list is an object 
  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <App />,
      errorElement: <Error />,
      children: [
        {
          path:"/",
          element:<Body />
        },
        {
          path:"/About",
          element:<About />
        },
        {
          path:"/contact",
          element:<Contact />
        },
        {
          path:"/restaurant/:resId",
          element:<RestaurantMenu />
        },
      ],
    }
  ])
     
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router =  {appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

