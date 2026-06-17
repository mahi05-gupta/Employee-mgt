import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Employees from "./pages/Employees";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AddEmployee from "./pages/AddEmployee";
import Settings from "./pages/Settings";
import Register from "./pages/Register";

import ViewEmployee from "./pages/ViewEmployee";
import EditEmployee from "./pages/EditEmployee";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* AUTH PAGES (NO LAYOUT) */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* MAIN APP (WITH SIDEBAR/LAYOUT) */}
        <Route element={<Layout />}>

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/add-employee" element={<AddEmployee />} />

          {/* ✅ FIXED MISSING ROUTES */}
          <Route path="/view-employee/:id" element={<ViewEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />

          <Route path="/settings" element={<Settings />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}