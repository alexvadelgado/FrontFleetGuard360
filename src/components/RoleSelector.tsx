import React, { useState } from "react";

const RoleSelector = () => {
  const [selectedRole, setSelectedRole] = useState<"admin" | "driver">("admin");

  return (
    <div className="mb-6">
      <div className="flex items-center justify-center rounded-lg bg-gray-300 p-1">
        <button
          onClick={() => setSelectedRole("admin")}
          className={`font-bold flex-1 rounded-md py-2 px-4 text-center transition-all ${
            selectedRole === "admin"
              ? "bg-white text-black shadow-sm"
              : "text-gray-600 hover:text-gray-700"
          }`}
        >
          Administrador
        </button>
        <button
          onClick={() => setSelectedRole("driver")}
          className={`font-bold flex-1 rounded-md py-2 px-4 text-center transition-all ${
            selectedRole === "driver"
              ? "bg-white text-black shadow-sm"
              : "text-gray-600 hover:text-gray-700"
          }`}
        >
          Conductor
        </button>
      </div>
    </div>
  );
};

export default RoleSelector;