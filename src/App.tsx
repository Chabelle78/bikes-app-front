import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout/MainLayout";
import PageLogin from "./pages/PageLogin";
import Home from "./pages/Home/Home";
import Error from "./pages/Error";
import BikeDetails from "./pages/BikeDetails/BikeDetails";
import Teams from "./features/components/Teams";

export const LocationDisplay = () => {
  const location = useLocation();

  return <div>{location.pathname}</div>;
};

const routes = [
  {
    path: "login",
    element: <PageLogin />,
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error />,
      },
      {
        path: "/bikes/:id",
        element: <BikeDetails />,
        errorElement: <Error />,
      },
      {
        path: "/teams",
        element: <Teams />,
        errorElement: <Error />,
      },
    ],
  },
];

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
