import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import AllTouristSpots from "../Pages/AllTouristSpots";
import AddTouristSpots from "../Pages/AddTouristSpots";
import MyList from "../Pages/MyList/MyList";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
          element: <AllTouristSpots></AllTouristSpots>
        },
        {
          path: '/addspot',
          element: <AddTouristSpots></AddTouristSpots>
        },
        {
          path: '/mylist',
          element: <MyList></MyList>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

