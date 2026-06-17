import { useState } from "react";

export default function Calendar({ employees = [] }) {
  const [selectedDate, setSelectedDate] = useState(null);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

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

  // employees for selected date
  const selectedEmployees = employees.filter(emp => {
    if (!emp.joiningDate || !selectedDate) return false;

    const joinDate = new Date(emp.joiningDate);

    return (
      joinDate.getDate() === selectedDate.day &&
      joinDate.getMonth() === month &&
      joinDate.getFullYear() === year
    );
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow w-full relative">

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

          if (!day) return <div key={i}></div>;

          const isToday =
            day === date.getDate() &&
            month === date.getMonth() &&
            year === date.getFullYear();

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
              onClick={() =>
                setSelectedDate({
                  day,
                })
              }
              className={`
                p-2 rounded cursor-pointer relative
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

      {/* POPUP MODAL */}
      {selectedDate && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-80 p-5 rounded-xl shadow-lg relative">

            <button
              className="absolute top-2 right-2 text-gray-500"
              onClick={() => setSelectedDate(null)}
            >
              ✕
            </button>

            <h2 className="text-lg font-bold mb-3">
              Employees Joined on {selectedDate.day} {date.toLocaleString("default", { month: "long" })}
            </h2>

            {selectedEmployees.length === 0 ? (
              <p className="text-gray-500">No employees found</p>
            ) : (
              <div className="space-y-2">

                {selectedEmployees.map(emp => (
                  <div key={emp._id} className="flex items-center gap-2 border p-2 rounded">

                    <img
                      src={
                        emp.profileImage ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(emp.name)}`
                      }
                      className="w-8 h-8 rounded-full"
                    />

                    <div>
                      <p className="font-semibold text-sm">{emp.name}</p>
                      <p className="text-xs text-gray-500">{emp.designation}</p>
                    </div>

                  </div>
                ))}

              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}