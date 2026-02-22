import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import { RouterProvider } from "react-router/dom";
import Root from "./pages/Root";
import OtherPage from "./pages/OtherPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "/other", element: <OtherPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
