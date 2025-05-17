import React from "react";
import { Key } from "lucide-react";

interface InputFieldProps {
  placeholder: string;
  id: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  placeholder,
  id,
  value,
  onChange,
}: InputFieldProps) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    // Permitir solo números y limitar la longitud a 6 dígitos
    if (/^\d{0,6}$/.test(inputValue)) {
      onChange?.(e);
    }
  };

  return (
    <div className="relative mb-4">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
        <Key size={18} />
      </div>
      <input
        type="number" // Cambiado a "number"
        id={id}
        className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-gray-700 shadow-sm transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        placeholder={placeholder}
        value={value}
        onChange={handleInputChange} // Usamos nuestra función de manejo
        maxLength={6} // Añadimos maxLength como atributo del input
      />
    </div>
  );
};

export default InputField;