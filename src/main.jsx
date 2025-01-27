import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header.jsx'
import EventDetail from "./Pages/EventDetail.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from './Pages/HomePage.jsx'
import LoginPage from './Pages/LoginPage.jsx'
import Events from './Pages/Events.jsx'
import Gallery from './Pages/Gallery.jsx'
import Sponsors from './Pages/Sponsors.jsx'
import CAPortal from './Pages/CAPortal.jsx'
import Teams from './Pages/Teams.jsx'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'

const AppComponent = () => {
  return (
    <div className='selection:bg-[#5F43B2]'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppComponent />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/events',
        element: <Events />
      },
      {
        path: '/gallery',
        element: <Gallery />
      },
      {
        path: '/sponsors',
        element: <Sponsors />
      },
      {
        path: '/caportal',
        element: <CAPortal />
      },
      {
        path: '/teams',
        element: <Teams />
      },
      {
        path: '/login',
        element: <LoginPage />
      },
      {
        path: '/eventsDetail',
        element: <EventDetail />
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
