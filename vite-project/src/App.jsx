import "./App.css";
import { Route, Routes, Navigate } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import AddProductPage from "./pages/AddProductPage";
import Layout from "./layout/Layout";
import FreeBoard from "./pages/FreeBoardPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Routes>
      {/* 처음 시작 시 /items 로 이동 */}
      <Route path="/" element={<Navigate to="/items" />} />

      <Route element={<Layout />}>
        <Route path="/items">
          <Route index element={<ProductsPage />} />
          <Route path=":productId" element={<ProductDetailPage />} />
        </Route>
        <Route path="/addItem" element={<AddProductPage />} />
        {/* freeBoard :  link active 테스트를 위해 미리 만듦 */}
        <Route path="/freeBoard" element={<FreeBoard />} />{" "}
      </Route>
    </Routes>
  );
}

export default App;
