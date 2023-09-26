import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './Pages/RootLayout';
import ErrorPage from './Pages/ErrorPage';
import Option1 from './Pages/Option1';
import Option2 from './Pages/Option2';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";




const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        children: [
          {
            path: '/', element: <Option1 />
          },
          {
            path: '/Option2', element: <Option2 />
          }
        ]
      },
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
