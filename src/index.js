import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from './Pages/RootLayout';
import ErrorPage from './Pages/ErrorPage';
import Option1 from './Pages/Option1.tsx';
import Option2 from './Pages/Option2';
import ProgramOverview from './Pages/ProgramOverview';
import reportWebVitals from './reportWebVitals';
import CandidatesProfile from './Pages/CandidateProfile.tsx';
import Events from './Pages/Events';
import Reports from './Pages/Reports';
import GeographyChart from './Pages/GeographyChart';
import "bootstrap/dist/css/bootstrap.min.css";
import './style.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/', element: <Option1 />
      },
      {
        path: '/Option2', element: <Option2 />
      },
      {
        path: '/Events', element: <Events />
      },
      {
        path: '/Repo', element: <Reports />
      },
      {
        path: '/GeographyChart', element: <GeographyChart />
      },
      {
        path: '/Candidate/:UserId',
        element: <CandidatesProfile />,
      },
      {
        path: '/ProgramOverview', element: <ProgramOverview />
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
