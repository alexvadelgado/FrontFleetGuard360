"use client";

import React, { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useRouter } from "next/navigation";


const ResetPass = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  


  const sendCode = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevenir recarga del formulario
    setLoading(true);

        
       alert("Código enviado a " + email);
       router.push("/login");
    };

  const returnToLogin =() => {
    router.push("/login");
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

        <div className="flex flex-col items-center lg:block mt-8 lg:rounded-3xl lg:bg-white p-8 lg:shadow-xl space-y-8">
          <div className="flex items-row items-center justify-around">
             <h2 className="text-[26px] font-bold text-gray-900">¿Olvidaste tu contraseña?</h2>

            <button
                    type="button"
                    className="hidden lg:block cursor-pointer text-gray-500 text-5xl hover:text-gray-700 hover:underline"
                    onClick={returnToLogin}
                  >
                    ←
            </button>
          </div>
          

          <h3 className="mt-1 text-[17px] lg:text-sm text-gray-700">
                Ingresa tu correo para  mandar un link y que reestablescas tu contraseña

         </h3>
              <form className="mt-4 w-full" onSubmit={sendCode}>
                
                <InputField
                  type="email"
                  id="email"
                  placeholder="Ingresa tu usuario"
                  icon="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div className="flex items-center flex-col justify-between gap-4 mt-6">
                  <Button
                    type="submit"
                    className="cursor-pointer w-40 hover:bg-primary/80 transition-transform duration-200 hover:scale-105"
                    disabled={loading}
                  >
                    Enviar
                  </Button>
                </div>

                <div className="flex items-start flex-col justify-between gap-4 mt-6">
                  <button
                    type="button"
                    className="lg:hidden cursor-pointer block text-gray-500 text-5xl hover:text-gray-700 hover:underline"
                    onClick={returnToLogin}
                  >
                    ←
                  </button>
                </div>
              </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;