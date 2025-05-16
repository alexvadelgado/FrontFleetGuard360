
import React from "react";
import InputField from "../components/InputField";
import RoleSelector from "../components/RoleSelector";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-primary md:text-4xl">
            Sistema de Gestión de Conductores
          </h1>
          <p className="mt-3 text-gray-500">
            Inicia sesión para acceder al sistema
          </p>
        </div>

        <div className="flex flex-col items-center lg:block mt-8 lg:rounded-3xl lg:bg-white p-8 lg:shadow-xl">
            <h2 className="text-2xl font-bold text-gray-900">
              Iniciar sesión
            </h2>
            <h3 className="mt-1 text-[19px] lg:text-sm text-gray-500">
              Selecciona tu rol e ingresa tus credenciales
            </h3>
          <div className="mb-6"></div>

          <RoleSelector />

          <form>
            <label className="mb-2 font-bold text-bold text-black">
              Correo electrónico:
            </label>
            <InputField
              type="email"
              id="email"
              placeholder="Ingresa tu usuario"
              icon="email"
            />
            <label className="mb-2 font-bold text-bold text-black">
              Contraseña:
            </label>
            <InputField
              type="password"
              id="password"
              placeholder="Ingresa tu contraseña"
              icon="password"
            />

            <div className="flex flex-col lg:flex-col-reverse items-center justify-between gap-4">
                <Button className="w-40">Enviar código</Button>
                <a
                    href="#"
                    className="text-primary hover:text-primary/90 hover:underline self-center lg:self-start"
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