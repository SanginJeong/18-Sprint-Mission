import "./App.css";
import { Route, Routes } from "react-router";
import ProductsPage from "./pages/ProductsPage";
import AddProductPage from "./pages/AddProductPage";
import Layout from "./layout/Layout";
import FreeBoard from "./pages/FreeBoardPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route element={<Layout />}>
        <Route path="/items">
          <Route index element={<ProductsPage />} />
          <Route path=":productId" element={<ProductDetailPage />} />
        </Route>
        <Route path="/addItem" element={<AddProductPage />} />
        {/* freeBoard :  link active 테스트를 위해 미리 만듦 */}
        <Route path="/freeBoard" element={<FreeBoard />} />
      </Route>
    </Routes>
  );
}

export default App;
