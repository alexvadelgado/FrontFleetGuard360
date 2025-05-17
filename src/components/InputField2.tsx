import React from "react";
import { Mail, Lock, Key } from "lucide-react"; // Importa el icono Key

interface InputFieldProps {
  type: string;
  placeholder: string;
  icon: "email" | "password" | "key"; // Añade "key" a los tipos posibles
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  type,
  placeholder,
  icon,
  id,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="relative mb-4">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        {icon === "email" ? (
          <Mail size={18} />
        ) : icon === "password" ? (
          <Lock size={18} />
        ) : (
          <Key size={18} /> // Renderiza el icono Key si icon es "key"
        )}
      </div>
      <input
        type={type}
        id={id}
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-gray-700 shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;