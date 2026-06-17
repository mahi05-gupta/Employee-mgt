import { FaEdit, FaTrash } from "react-icons/fa";

export default function EmployeeCard({ employee }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">

      <div>
        <h2 className="font-bold">{employee.name}</h2>
        <p className="text-gray-500">{employee.email}</p>
        <p className="text-sm text-gray-400">{employee.role}</p>
      </div>

      <div className="flex gap-3">
        <button className="text-blue-500">
          <FaEdit />
        </button>

        <button className="text-red-500">
          <FaTrash />
        </button>
      </div>

    </div>
  );
}