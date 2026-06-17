import { useEffect, useState } from "react";
import api from "../services/api";

export default function Settings() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // GET CURRENT USER
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/auth/me"); // ✅ FIXED ROUTE

        setForm({
          name: res.data.name || "",
          email: res.data.email || "",
          password: "",
        });
      } catch (err) {
        console.log("GET USER ERROR:", err.response?.data || err.message);
      }
    };

    fetchUser();
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // SAVE CHANGES
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const payload = {
        name: form.name,
        email: form.email,
      };

      // only send password if user entered it
      if (form.password.trim() !== "") {
        payload.password = form.password;
      }

      const res = await api.put("/auth/update", payload); // ✅ FIXED ROUTE

      console.log("UPDATED:", res.data);

      alert("Profile updated successfully");
    } catch (err) {
      console.log("UPDATE ERROR:", err.response?.data || err.message);

      alert(
        err.response?.data?.message ||
          "Update failed (check backend)"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      <div className="bg-white p-6 rounded-xl shadow max-w-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
            className="border p-2 rounded"
            required
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="border p-2 rounded"
            required
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="New Password (optional)"
            className="border p-2 rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {loading ? "Saving..." : "Save Changes"}
          </button>

        </form>
      </div>
    </div>
  );
}