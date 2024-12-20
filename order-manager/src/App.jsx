import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OrderDetails from './OrderDetails'
import KnowMap from './KnowMap'
import Trial from './Trial'
import Provider from './context-related/Provider'
import Logistic from './context-related/Logistic'
import PartnerStore from './context-related/PartnerStore'
import { useRoutes, Link } from 'react-router-dom'
import Home from './Home'
import EditOrder from './EditOrder'
import NotFound from './NotFound'
function App() {
  const [count, setCount] = useState(0)


  const routeDetails = [
    { path: '/', element: <Home /> },
    { path: '/orders', element: <OrderDetails /> },
    { path: '/contact', element: <Provider /> },
    { path: '/edit/:id', element: <EditOrder /> },

    { path: '*', element: <NotFound /> }
  ]
  const MyRoutes = () => {

    let routeConfig = useRoutes(routeDetails)

    return routeConfig
  }


  return (

    <>
     
     
      <MyRoutes></MyRoutes>

      <Link to={'/'} style={{ margin: '10px' }}>Home</Link>
      <Link to={'/orders'} style={{ margin: '10px' }}>Orders</Link>
      <Link to={'/client'} style={{ margin: '10px' }}>Client</Link>

      {/* <Link to={'/edit/101/ram'} style={{ margin: '10px' }}>Trying</Link> */}

    </>
  )
}

export default App
