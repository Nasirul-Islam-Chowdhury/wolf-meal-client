import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout';
import Meals from './components/meals/Meals';
import ConfirmOrder from './components/confirmOrder/ConfirmOrder';
import Orders from './components/pages/orders/Orders';
import Signup from './components/pages/register/Signup';
import Signin from './components/pages/Signin/Signin';
import PrivateRoute from './components/pages/privateRoute/PrivateRoute';
import Profile from './components/pages/Profile/Profile';
import About from './components/pages/about/About';
import Home from './components/pages/home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/meals',
          element: <Meals/>
        },
        {
          path: '/conformOrder/:_id',
          element: <PrivateRoute><ConfirmOrder/></PrivateRoute>,
          loader: ({params})=> fetch(`https://wolf-meal-server.vercel.app/meals/${params._id}`)
        },
        {
          path: '/orders',
          element: <PrivateRoute><Orders/></PrivateRoute>,
        },
        {
          path: '/signup',
          element: <Signup/>,
        },
        {
          path: '/signin',
          element: <Signin/>,
        },
        {
          path: '/profile',
          element: <Profile/>,
        },
        {
          path: '/about',
          element: <About/>,
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;