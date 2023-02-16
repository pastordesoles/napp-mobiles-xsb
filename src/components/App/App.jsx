import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
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
          element={<ProductListPage key={setProductCount} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

export default App;
