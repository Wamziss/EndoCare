import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import Home from './Components/Dashboard/Home.jsx'
import Records from './Components/Dashboard/Records.jsx';
import Health from './Components/Dashboard/Health.jsx';
import Community from './Components/Dashboard/Community.jsx';
import Saved from './Components/Dashboard/Saved.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/records',
    element: <Records />
  },
  {
    path: '/health',
    element: <Health />
  },
  {
    path: '/community',
    element: <Community />
  },
  {
    path: '/saved',
    element: <Saved />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
