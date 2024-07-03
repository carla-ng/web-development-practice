import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx';
import MemeGeneratorPage from './MemeGenerator/pages/MemeGeneratorPage.jsx';
import AirbnbExperiencesPage from './AirbnbExperiences/pages/AirbnbExperiencesPage.jsx';
import TenziesPage from './Tenzies/pages/TenziesPage.jsx';
import FoodieLandingPage from './FoodieLandingPage/pages/FoodieLandingPage.jsx';
import CandyCrushPage from './CandyCrush/pages/CandyCrushPage.jsx';
import ReactEssentialsPage from './ReactEssentials/pages/ReactEssentialsPage.jsx';
import TicTacToePage from './TicTacToe/pages/TicTacToePage.jsx';
import InvestmentCalculatorPage from './InvestmentCalculator/pages/InvestmentCalculatorPage.jsx';

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
    {
        path: '/tenzies',
        element: <TenziesPage />,
    },
    {
        path: '/foodielandingpage',
        element: <FoodieLandingPage />,
    },
    {
        path: '/candycrush',
        element: <CandyCrushPage />,
    },
    {
        path: '/reactessentials',
        element: <ReactEssentialsPage />,
    },
    {
        path: '/tictactoe',
        element: <TicTacToePage />,
    },
    {
        path: '/investmentcalculator',
        element: <InvestmentCalculatorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
