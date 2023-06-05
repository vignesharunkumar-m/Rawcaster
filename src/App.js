import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dasboard from "./Layout/DasboardLayouts/dasboard";
import Signin from "./Layout/AuthLayout/signin";
import Signup from "./Layout/AuthLayout/signup";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <Dasboard />,
      },
      {
        path: "/signin",
        element: <Signin />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
