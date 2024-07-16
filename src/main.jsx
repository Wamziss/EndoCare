

import React from 'react'
import App from './App.jsx'
import './index.css'
import Home from './Components/Dashboard/Home.jsx'
import Records from './Components/Dashboard/Records.jsx';
import Health from './Components/Dashboard/Health.jsx';
import Community from './Components/Dashboard/Community.jsx';
import Saved from './Components/Dashboard/Saved.jsx';
import Settings from './Components/Dashboard/Settings.jsx';

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
  },
  {
    path: '/settings',
    element: <Settings />
  }
])

