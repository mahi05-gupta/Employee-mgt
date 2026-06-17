import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";
import {
  FaEye,
  FaEdit,
  FaTrash,
  FaPlus,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await api.get("/employees");
      const data = res.data?.employees || res.data || [];
      setEmployees(Array.isArray(data) ? data : []);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEmployee = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this employee?"
    );

    if (!confirmDelete) return;

    try {
      await api.delete(`/employees/${id}`);

      setEmployees((prev) =>
        prev.filter((emp) => emp._id !== id)
      );

      alert("Employee deleted successfully");
    } catch (err) {
      console.log(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold">
            {employees.length} Employee
          </h1>
        </div>

        <button
          onClick={() => navigate("/add-employee")}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-xl flex items-center gap-2"
        >
          <FaPlus />
          Add Employee
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {employees.length === 0 ? (
          <p>No employees found</p>
        ) : (
          employees.map((emp) => (
            <div
              key={emp._id}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-lg transition relative"
            >
              {/* TOP */}
              <div className="flex justify-between items-start">
                <img
                  src={
                    emp.profileImage ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      emp.name
                    )}&background=f97316&color=fff`
                  }
                  alt={emp.name}
                  className="w-16 h-16 rounded-full object-cover"
                />

                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenMenu(
                        openMenu === emp._id ? null : emp._id
                      )
                    }
                    className="text-2xl font-bold px-2"
                  >
                    ...
                  </button>

                  {openMenu === emp._id && (
                    <div className="absolute right-0 top-10 bg-white border rounded-xl shadow-lg w-40 z-50">
                      <button
                        onClick={() =>
                          navigate(`/view-employee/${emp._id}`)
                        }
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                      >
                        <FaEye />
                        View
                      </button>

                      <button
                        onClick={() =>
                          navigate(`/edit-employee/${emp._id}`)
                        }
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-100"
                      >
                        <FaEdit />
                        Edit
                      </button>

                      <button
                        onClick={() =>
                          deleteEmployee(emp._id)
                        }
                        className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50"
                      >
                        <FaTrash />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* NAME */}
              <h2 className="mt-4 text-lg font-semibold">
                {emp.name}
              </h2>

              <p className="text-gray-400 text-sm">
                {emp.designation}
              </p>

              {/* DEPARTMENT + JOINED DATE */}
              <div className="grid grid-cols-2 mt-6">
                <div>
                  <p className="text-gray-400 text-xs">
                    Department
                  </p>

                  <p className="font-semibold text-sm">
                    {emp.department}
                  </p>
                </div>

                <div>
                  <p className="text-gray-400 text-xs">
                    Joined Date
                  </p>

                  <p className="font-semibold text-sm">
                    {emp.joiningDate
                      ? new Date(
                          emp.joiningDate
                        ).toLocaleDateString()
                      : "N/A"}
                  </p>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-3 mt-6 text-gray-700">
                <FaEnvelope />
                <span className="text-sm">
                  {emp.email}
                </span>
              </div>

              {/* PHONE */}
              <div className="flex items-center gap-3 mt-3 text-gray-700">
                <FaPhone />
                <span className="text-sm">
                  {emp.phone}
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}