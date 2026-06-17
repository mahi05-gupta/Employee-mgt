import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

export default function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    phone: "",
    salary: ""
  });

  const [loading, setLoading] = useState(true);

  // FETCH SINGLE EMPLOYEE
  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const res = await API.get(`/employees/${id}`);
        setEmployee(res.data);
        setLoading(false);
      } catch (err) {
        console.log("Error fetching employee:", err);
        setLoading(false);
      }
    };

    fetchEmployee();
  }, [id]);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  // UPDATE EMPLOYEE
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/employees/${id}`, employee);
      alert("Employee updated successfully!");
      navigate("/employees");
    } catch (err) {
      console.log("Update error:", err);
      alert("Failed to update employee");
    }
  };

  if (loading) return <p className="p-4">Loading employee data...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-xl shadow">

      <h2 className="text-2xl font-bold mb-4">Edit Employee</h2>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={employee.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={employee.salary}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>

          <button
            type="button"
            onClick={() => navigate("/employees")}
            className="bg-gray-400 text-white px-4 py-2 rounded"
          >
            Back
          </button>
        </div>

      </form>
    </div>
  );
}