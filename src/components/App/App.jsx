import { Navigate, Route, Routes } from "react-router-dom";
import DetailsPage from "../../pages/DetailsPage/DetailsPage";
import ProductListPage from "../../pages/ProductListPage/ProductListPage";
import Header from "../Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/phone/:phoneId" element={<DetailsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
