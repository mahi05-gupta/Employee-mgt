import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const res = await api.get("/employees");

      const data = Array.isArray(res.data)
        ? res.data
        : res.data?.employees || [];

      setEmployees(data);
    } catch (err) {
      console.log("Dashboard error:", err.message);
      setEmployees([]);
    } finally {
      setLoading(false);
    }
  };

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const firstDay = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();

  const calendarDays = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let i = 1; i <= totalDays; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="p-4 space-y-6">

      {/* STATS + CALENDAR */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* STATS */}
        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Total Employees</h2>
            <p className="text-3xl font-bold">{employees.length}</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Present Today</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Absent Today</h2>
            <p className="text-3xl font-bold">0</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h2 className="text-gray-500">Departments</h2>
            <p className="text-3xl font-bold">
              {new Set(employees.map(e => e.department)).size}
            </p>
          </div>

        </div>

        {/* CALENDAR */}
        <div className="bg-white p-4 rounded-xl shadow">

          <h2 className="text-lg font-bold mb-3">
            {date.toLocaleString("default", { month: "long" })} {year}
          </h2>

          {/* WEEK DAYS */}
          <div className="grid grid-cols-7 text-center text-xs font-semibold mb-2">
            {days.map((d) => (
              <div key={d}>{d}</div>
            ))}
          </div>

          {/* DAYS */}
          <div className="grid grid-cols-7 text-center gap-1 text-sm">

            {calendarDays.map((day, i) => {

              if (!day) {
                return <div key={i}></div>;
              }

              const isToday =
                day === new Date().getDate() &&
                month === new Date().getMonth() &&
                year === new Date().getFullYear();

              const hasJoinings = employees.some(emp => {
                if (!emp.joiningDate) return false;

                const joinDate = new Date(emp.joiningDate);

                return (
                  joinDate.getDate() === day &&
                  joinDate.getMonth() === month &&
                  joinDate.getFullYear() === year
                );
              });

              return (
                <div
                  key={i}
                  className={`
                    p-2 rounded relative
                    ${isToday ? "bg-orange-500 text-white font-bold" : ""}
                    ${hasJoinings ? "border border-green-500" : ""}
                    hover:bg-orange-100
                  `}
                >
                  {day}

                  {hasJoinings && (
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mx-auto mt-1"></div>
                  )}
                </div>
              );
            })}

          </div>

        </div>
      </div>

      {/* RECENT EMPLOYEES */}
      <h2 className="text-xl font-bold">Recent Employees</h2>

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : employees.length === 0 ? (
        <p className="text-gray-500">No employees found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

          {employees.slice(0, 8).map((emp) => (
            <div
              key={emp._id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={
                  emp.profileImage ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(emp.name)}`
                }
                className="w-12 h-12 rounded-full mb-3"
              />

              <h3 className="font-semibold">{emp.name}</h3>
              <p className="text-gray-500 text-sm">{emp.email}</p>
              <p className="text-gray-400 text-sm">
                {emp.designation || "Employee"}
              </p>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}