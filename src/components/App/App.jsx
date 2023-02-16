import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DetailsPage from "../../pages/ProductListPage/DetailsPage/DetailsPage";
import ProductListPage from "../../pages/ProductListPage/ProductListPage";
import Header from "../Header/Header";

const App = () => {
  const [productCount, setProductCount] = useState(
    localStorage.getItem("productCount") ?? 0
  );
  return (
    <>
      <Header productCount={productCount} />
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route
          path="/phone/:phoneId"
          element={<DetailsPage key={setProductCount} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
