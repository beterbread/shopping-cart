import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';

const routes = createBrowserRouter([
  {
    path: "/", 
    element: <App />, 
    children: [
      {
        path: "home", 
        element: <Home />,
      },
      {
        path: "shop", 
        element: <Shop />,
      },
      {
        path: "cart", 
        element: <Cart />,
      },
      {
        path: "/", 
        element: <Home />,
      },
    ],
  },
]);

export default routes;
