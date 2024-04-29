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
import SpecificCountries from "../Pages/SpecificCountries";
import ErrorPage from '../Pages/ErrorPage'
import TouristSpotHome from "../Components/TouristSpotHome";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root ></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://discover-euro-server-r9x6oq445-s-m-saifur-rahmans-projects.vercel.app/spots')
          
        },
        {
          path: '/',
          element: <TouristSpotHome></TouristSpotHome>,
       
        },
        {
          path: '/allspot',
          element: <AllTouristSpots></AllTouristSpots>,
          loader: () => fetch('https://discover-euro-server-r9x6oq445-s-m-saifur-rahmans-projects.vercel.app/spots')
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
          loader: ({params}) => fetch(`https://discover-euro-server-r9x6oq445-s-m-saifur-rahmans-projects.vercel.app/spots/${params.id}`)
        },
        {
          path: '/updatespot/:id',
          element: <UpdateSpot></UpdateSpot>,
          loader: ({params})=> fetch(`https://discover-euro-server-r9x6oq445-s-m-saifur-rahmans-projects.vercel.app/spots/${params.id}`)
        },
        {
          path: '/spots/country/:countryName',
          element: <SpecificCountries></SpecificCountries>,
          loader: ({params}) => fetch(`https://discover-euro-server-r9x6oq445-s-m-saifur-rahmans-projects.vercel.app/spots/country/${params.countryName}`)
        }
      ]
    },
  ]);

