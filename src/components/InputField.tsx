import React from "react";
import { Mail, Lock } from "lucide-react";

interface InputFieldProps {
  type: string;
  placeholder: string;
  icon: "email" | "password";
  id: string;
}

const InputField = ({ type, placeholder, icon, id }: InputFieldProps) => {
  return (
    <div className="relative mb-4">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon === "email" ? <Mail size={18} /> : <Lock size={18} />}
      </div>
      <input
        type={type}
        id={id}
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-gray-700 shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputField;