import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import EmailConfirm from "./pages/EmailConfirm";
import EmailCheckProvider from "./contexts/emailcheck";
import CreateUser from "./pages/CreateUser";
import DataUserProvider from "./contexts/userData";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <DataUserProvider>
        <EmailCheckProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkemail" element={<EmailConfirm />} />
            <Route path="/createuser" element={<CreateUser />} />
          </Routes>
        </EmailCheckProvider>
      </DataUserProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
