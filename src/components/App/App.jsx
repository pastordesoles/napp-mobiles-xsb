import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "../../pages/ProductListPage/ProductListPage";
import Header from "../Header/Header";

const App = createBrowserRouter([
  {
    element: <Header />,
    children: [
      {
        path: "/",
        element: <ProductListPage />,
      },
      {
        path: "/phone/:phoneId",
        element: <ProductListPage />,
      },
      {
        path: "*",
        element: <ProductListPage />,
      },
    ],
  },
]);

export default App;
