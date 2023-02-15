import { createBrowserRouter } from "react-router-dom";
import ProductListPage from "../../pages/ProductListPage/ProductListPage";

const App = createBrowserRouter([
  {
    path: "/",
    element: <ProductListPage />,
    children: [
      {
        path: "/phone/:phoneId",
        element: <ProductListPage />,
      },
    ],
  },
]);

export default App;
