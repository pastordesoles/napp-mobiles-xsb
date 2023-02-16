import { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
        <Route path="/phone/:phoneId" element={<ProductListPage />} />
        <Route path="*" element={<ProductListPage />} />
      </Routes>
    </>
  );
};

export default App;
