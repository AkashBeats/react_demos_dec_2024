import Home from './Home'
import NotFound from './NotFound'
import OrderDetails from './OrderDetails'
const routeDetails = [
    { path: '/', element: <Home /> },
    { path: '/orders', element: <OrderDetails /> },
    { path: '/contact', element: <Provider /> },
    { path: '/edit/:id',  element: <EditOrder /> },

    { path: '*', element: <NotFound /> }
]
const MyRoutes = () => {

    let routeConfig = useRoutes(routeDetails)

    return routeConfig
}

export default MyRoutes;