"use client";

import React, { useState } from "react";
import InputField from "../../components/InputField";
import RoleSelector from "../../components/RoleSelector";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"admin" | "driver">("admin");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Enviando...");

    // Aquí puedes hacer validaciones o llamada API de login
    if (!email || !password || !role) {
      alert("Por favor, completa todos los campos");
      return;
    }

    // Simulación de login exitoso
    router.push("/profile");
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            Sistema de Gestión de Conductores
          </h1>
          <p className="mt-3 text-gray-500">Inicia sesión para acceder al sistema</p>
        </div>

        <div className="flex flex-col items-center lg:block mt-8 lg:rounded-3xl lg:bg-white p-8 lg:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-900">Iniciar sesión</h2>
          <h3 className="mt-1 text-[19px] lg:text-sm text-gray-500">
            Selecciona tu rol e ingresa tus credenciales
          </h3>

          <RoleSelector selectedRole={role} onChange={setRole} />

          <form className="mt-4 w-full" onSubmit={handleSubmit}>
            <label className="mb-2 font-bold text-black block" htmlFor="email">
              Correo electrónico:
            </label>
            <InputField
              type="email"
              id="email"
              placeholder="Ingresa tu usuario"
              icon="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="mb-2 font-bold text-black block mt-4" htmlFor="password">
              Contraseña:
            </label>
            <InputField
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              icon="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex flex-col lg:flex-col-reverse items-center justify-between gap-4 mt-6">
              <Button
                type="submit"
                className="w-40 hover:bg-primary/80 transition-transform duration-200 hover:scale-105"
              >
                Iniciar sesión
              </Button>
              <a
                href="#"
                className="text-[#3DAEF4] hover:text-primary/80 hover:underline self-center lg:self-start"
              >
                ¿Has olvidado tu contraseña?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
