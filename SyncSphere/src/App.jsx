import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Connect } from "./Pages/Connect";
import { Contact } from "./Pages/Contact";
import { Registration } from "./Pages/Registration";
import { AppLayout } from "./Components/Layout/AppLayout";
import { Login } from "./Pages/Login";
import { UserProfile } from "./Pages/UserProfile";
import User from "./Pages/User";
import { ProfileEdit } from "./Pages/ProfileEdit";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/connect",
          element: <Connect />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/user",
          element: <User />,
        },
      ],
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/userProfile",
      element: <UserProfile />,
    },
  ]);

  return <RouterProvider router={router} />;
};
