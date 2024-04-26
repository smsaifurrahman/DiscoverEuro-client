import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AllTouristSpots from "../Pages/AllTouristSpots";
import AddTouristSpots from "../Pages/AddTouristSpots";
import MyList from "../Pages/MyList/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SpotCardDetails from "../Components/Navbar/SpotCardDetails";
import UpdateSpot from "../Pages/UpdateSpot";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root ></Root>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/allspot',
          element: <AllTouristSpots></AllTouristSpots>,
          loader: () => fetch('http://localhost:5000/spots')
        },
        {
          path: '/addspot',
          element: <PrivateRoute><AddTouristSpots></AddTouristSpots></PrivateRoute>
        },
        {
          path: '/mylist',
          element: <PrivateRoute> <MyList></MyList></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/spotdetails/:id',
          element: <SpotCardDetails></SpotCardDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/spots/${params.id}`)
        },
        {
          path: '/updatespot/:id',
          element: <UpdateSpot></UpdateSpot>,
          loader: ({params})=> fetch(`http://localhost:5000/spots/${params.id}`)
        }
      ]
    },
  ]);

