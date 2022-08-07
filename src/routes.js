import {
  ReactLocation,
  Router,
  Outlet
} from '@tanstack/react-location';
import Products from './pages/Products';
import AddProduct from './pages/Products/Add';
const location = new ReactLocation();


export const Routes = () => {

  const RouteList = [
    {
      path: '/',
      element: <Products />,
    },
    {
      path: '/products',
      children: [
        {
          path: '/',
          element: <Products />,
        },
        {
          path: '/add',
          element: <AddProduct />,
        }
      ]
    }
  ];

  return (
    <Router
      location={location}
      routes={RouteList.map((item) => item)}
    >
      <Outlet />
    </Router>
  )
}

export default Routes;
