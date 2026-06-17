import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function ViewEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEmployee();
  }, [id]);

  const fetchEmployee = async () => {
    try {
      const res = await API.get(`/employees/${id}`);
      setEmployee(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  if (!employee) {
    return <p className="p-6">Employee not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow p-8">

      {/* TOP ACTION BAR */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Employee Details</h2>

        <button
          onClick={() => navigate("/employees")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
        >
          ← Back
        </button>
      </div>

      {/* HEADER */}
      <div className="flex items-center gap-6 mb-8">

        <img
          src={
            employee.profileImage ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(
              employee.name
            )}&background=f97316&color=fff`
          }
          alt={employee.name}
          className="w-28 h-28 rounded-full object-cover border"
        />

        <div>
          <h1 className="text-3xl font-bold">
            {employee.name}
          </h1>

          <p className="text-gray-500 text-lg">
            {employee.designation}
          </p>
        </div>

      </div>

      {/* DETAILS */}
      <div className="grid md:grid-cols-2 gap-6">

        <div>
          <p className="text-gray-500">Email</p>
          <p className="font-semibold">{employee.email}</p>
        </div>

        <div>
          <p className="text-gray-500">Phone</p>
          <p className="font-semibold">{employee.phone}</p>
        </div>

        <div>
          <p className="text-gray-500">Department</p>
          <p className="font-semibold">{employee.department}</p>
        </div>

        <div>
          <p className="text-gray-500">Salary</p>
          <p className="font-semibold">₹ {employee.salary}</p>
        </div>

        <div>
          <p className="text-gray-500">Joining Date</p>
          <p className="font-semibold">
            {employee.joiningDate
              ? new Date(employee.joiningDate).toLocaleDateString()
              : "N/A"}
          </p>
        </div>

      </div>
    </div>
  );
}