import React from "react";

interface RoleSelectorProps {
  selectedRole: "admin" | "driver";
  onChange: (role: "admin" | "driver") => void;
}

const RoleSelector: React.FC<RoleSelectorProps> = ({ selectedRole, onChange }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-center rounded-lg bg-secondary p-1">
        <button
          type="button"
          onClick={() => onChange("admin")}
          className={`font-bold flex-1 rounded-md py-2 px-4 text-center transition-all ${
            selectedRole === "admin"
              ? "bg-white text-black shadow-sm"
              : "text-gray-600 hover:text-gray-700"
          }`}
        >
          Administrador
        </button>
        <button
          type="button"
          onClick={() => onChange("driver")}
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
