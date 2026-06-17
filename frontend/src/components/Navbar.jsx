export default function Navbar() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 20px",
          background: "white",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <input
          placeholder="Search..."
          style={{
            width: "250px",
            padding: "8px 10px",
            border: "1px solid #ccc",
            borderRadius: "6px",
          }}
        />
  
        <div>Profile</div>
      </div>
    );
  }