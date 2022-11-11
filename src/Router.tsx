import { BrowserRouter, Route, Routes } from "react-router-dom";
import ExPage from "./pages/ExPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ExPage />} />
      </Routes>
    </BrowserRouter>
  );
}
