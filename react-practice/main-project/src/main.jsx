import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx';
import MemeGeneratorPage from './pages/MemeGeneratorPage.jsx';
import AirbnbExperiencesPage from './pages/AirbnbExperiencesPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <NotFoundPage />,
    },
    {
        path: '/memegenerator',
        element: <MemeGeneratorPage />,
    },
    {
        path: '/airbnbexperiences',
        element: <AirbnbExperiencesPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
