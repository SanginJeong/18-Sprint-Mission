import "./App.css";
import { Route, Routes, Navigate } from "react-router";
import ItemsPage from "./pages/ItemsPage";
import AddItemPage from "./pages/AddItemPage";
import Layout from "./layout/Layout";
import FreeBoard from "./pages/FreeBoardPage";
import ItemDetailPage from "./pages/ItemDetailPage";

function App() {
  return (
    <Routes>
      {/* 처음 시작 시 /items 로 이동 */}
      <Route path="/" element={<Navigate to="/items" />} />

      <Route element={<Layout />}>
        <Route path="/items">
          <Route index element={<ItemsPage />} />
          <Route path=":productId" element={<ItemDetailPage />} />
        </Route>
        <Route path="/addItem" element={<AddItemPage />} />
        {/* freeBoard :  link active 테스트를 위해 미리 만듦 */}
        <Route path="/freeBoard" element={<FreeBoard />} />{" "}
      </Route>
    </Routes>
  );
}

export default App;
