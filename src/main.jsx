// import 'bootstrap/dist/css/bootstrap.min.css';
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import './index.css'


// import App from './App.jsx'
// import Home from './Components/Dashboard/Home.jsx'
// import Records from './Components/Dashboard/Records.jsx';
// import Health from './Components/Dashboard/Health.jsx';
// import Community from './Components/Dashboard/Community.jsx';
// import Saved from './Components/Dashboard/Saved.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/home',
//     element: <Home />
//   },
//   {
//     path: '/records',
//     element: <Records />
//   },
//   {
//     path: '/health',
//     element: <Health />
//   },
//   {
//     path: '/community',
//     element: <Community />
//   },
//   {
//     path: '/saved',
//     element: <Saved />
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { BrowserRouter } from 'react-router-dom'
// import Home from './Components/Dashboard/Home.jsx'
// import Records from './Components/Dashboard/Records.jsx';
// import Health from './Components/Dashboard/Health.jsx';
// import Community from './Components/Dashboard/Community.jsx';
// import Saved from './Components/Dashboard/Saved.jsx';
// import Settings from './Components/Dashboard/Settings.jsx';
// import { createBrowserRouter } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//   },
//   {
//     path: '/home',
//     element: <Home />
//   },
//   {
//     path: '/records',
//     element: <Records />
//   },
//   {
//     path: '/health',
//     element: <Health />
//   },
//   {
//     path: '/community',
//     element: <Community />
//   },
//   {
//     path: '/saved',
//     element: <Saved />
//   },
//   {
//     path: '/settings',
//     element: <Settings />
//   }
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
// )

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import Home from './Components/Dashboard/Home.jsx'
import Records from './Components/Dashboard/Records.jsx'
import Health from './Components/Dashboard/Health.jsx'
import Community from './Components/Dashboard/Community.jsx'
import Saved from './Components/Dashboard/Saved.jsx'
import Settings from './Components/Dashboard/Settings.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/records" element={<Records />} />
        <Route path="/health" element={<Health />} />
        <Route path="/community" element={<Community />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)


