import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./pages/CartPage";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import PayPage from "./pages/PayPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="menu/:menuId" element={<DetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pay" element={<PayPage />} />
      </Routes>
    </BrowserRouter>
  );
}
