import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

export default function AddEmployee() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    designation: "",
    salary: "",
    joiningDate: "",
    profileImage: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ✅ CLEAN & FIX DATA BEFORE SENDING
      const payload = {
        name: form.name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        department: form.department.trim(),
        designation: form.designation.trim(),
        salary: Number(form.salary), // IMPORTANT
        joiningDate: form.joiningDate
          ? new Date(form.joiningDate)
          : undefined,
        profileImage: form.profileImage.trim(),
      };

      console.log("FINAL PAYLOAD:", payload);

      const res = await api.post("/employees", payload);

      console.log("SUCCESS:", res.data);

      alert("Employee Added Successfully");

      navigate("/employees");
    } catch (error) {
      console.log("ERROR RESPONSE:", error.response?.data);
      console.log("ERROR MESSAGE:", error.message);

      alert(
        error.response?.data?.message ||
          "Failed to add employee (check backend)"
      );
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-2xl font-bold mb-2">Add Employee</h1>
      <p className="text-gray-500 mb-6">
        Create a new employee record
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-2 rounded"
          required
        />

        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 rounded"
          required
        />

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-2 rounded"
          required
        />

        <input
          name="department"
          value={form.department}
          onChange={handleChange}
          placeholder="Department"
          className="border p-2 rounded"
          required
        />

        <input
          name="designation"
          value={form.designation}
          onChange={handleChange}
          placeholder="Designation"
          className="border p-2 rounded"
          required
        />

        <input
          name="salary"
          value={form.salary}
          onChange={handleChange}
          placeholder="Salary"
          type="number"
          className="border p-2 rounded"
          required
        />

        <input
          name="joiningDate"
          value={form.joiningDate}
          onChange={handleChange}
          type="date"
          className="border p-2 rounded"
        />

        <input
          name="profileImage"
          value={form.profileImage}
          onChange={handleChange}
          placeholder="Profile Image URL"
          className="border p-2 rounded"
        />

        <button
          type="submit"
          className="md:col-span-2 bg-orange-500 text-white py-2 rounded hover:bg-orange-600"
        >
          Save Employee
        </button>
      </form>
    </div>
  );
}