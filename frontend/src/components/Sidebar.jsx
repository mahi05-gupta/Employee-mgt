import { Link, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaUsers,
  FaPlus,
  FaCog,
} from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5 fixed top-0 left-0 flex flex-col">

      <h2 className="text-2xl font-bold mb-8">Employee Management</h2>

      <nav className="flex flex-col gap-4 flex-1">

        <Link className="flex items-center gap-3 hover:text-blue-400" to="/dashboard">
          <FaTachometerAlt /> Dashboard
        </Link>

        <Link className="flex items-center gap-3 hover:text-blue-400" to="/employees">
          <FaUsers /> Employees
        </Link>

        <Link className="flex items-center gap-3 hover:text-blue-400" to="/add-employee">
          <FaPlus /> Add Employee
        </Link>

        <Link className="flex items-center gap-3 hover:text-blue-400" to="/settings">
          <FaCog /> Settings
        </Link>

      </nav>

      <button
        onClick={logout}
        className="text-left text-red-400 hover:text-red-300 mt-auto"
      >
        Logout
      </button>

    </div>
  );
}