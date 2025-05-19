"use client";

import { useDriver } from "@/hooks/useDriver";
import Header from "@/components/Header";
import ImageName from "@/components/ImageName";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ResetPass() {
  const driverId = "DRV-2023-001";
  const { driver, loading, error } = useDriver(driverId);
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const cancelPass = () => router.push("/editDriver");

  const savePass = async () => {
    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    if (!/^[a-zA-Z0-9]{7,20}$/.test(password)) {
      alert("La contraseña debe ser alfanumérica y tener entre 7 y 20 caracteres.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/api/drivers/${driverId}/password`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        alert("Su contraseña ha sido actualizada correctamente.");
        router.push("/editDriver");
      } else {
        const errorData = await response.json();
        alert("Error al actualizar la contraseña: " + (errorData.message || "Error desconocido."));
      }
    } catch (err) {
      console.error(err);
      alert("Error de red al intentar actualizar la contraseña.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header userName="Cargando..." />
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header userName="Error" />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>Error al cargar los datos del conductor: {error.message}</p>
          </div>
        </div>
      </div>
    );
  }

  if (!driver) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <Header userName={driver.fullName} role={driver.role} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Cambiar contraseña</h2>
            <p className="text-sm text-gray-600 mb-4">Visualiza y actualiza tu información personal.</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-8">
          <ImageName driver={driver} />
          <div className="space-y-7">
            <div className="space-y-7 flex flex-col lg:flex-row lg:justify-around">
              <div className="space-y-7 w-full flexitems-row">



                <div  className="flex flex-col items-center">
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="max-w-sm mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                    {!/^[a-zA-Z0-9]{7,20}$/.test(password) && password.length > 0 && (
                      <p className="text-red-500 text-sm mt-1">
                        La contraseña debe ser alfanumérica y tener entre 7 y 20 caracteres.
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="max-w-sm mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                      required
                    />
                    {confirmPassword.length > 0 && confirmPassword !== password && (
                      <p className="text-red-500 text-sm mt-1">Las contraseñas no coinciden.</p>
                    )}
                  </div>
                </div>


                <div className="flex flex-col space-y-4 lg:items-end">
                  <div className="flex justify-around lg:justify-end space-x-2">
                    <button
                      onClick={cancelPass}
                      className="cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:text-primary hover:border-primary"
                    >
                      Cancelar
                    </button>
                    <button
                      onClick={savePass}
                      className="cursor-pointer rounded-md bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700"
                    >
                      Guardar cambios
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
