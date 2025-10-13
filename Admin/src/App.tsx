import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import LoginPage from "./pages/Login/index.tsx";
import AdminPage from "./pages/Admin";
import ProductManage from "./pages/ProductManage/index.tsx";
import UserManage from "./pages/UserManage/index.tsx";
import ProceedsPage from "./pages/Proceeds/index.tsx";
function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/usermanage" element={<UserManage />} />
          <Route path="/productmanage" element={<ProductManage />} />
          <Route path="/proceeds" element={<ProceedsPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
