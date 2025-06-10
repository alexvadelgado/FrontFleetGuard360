"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Driver {
  id: string;
  name: string;
  documentNumber: string;
  rol: string;
  email: string;
  phoneNumber: string;
  photo?: string;
}

interface Props {
  drivers: Driver[];
}

const handleDelete = async (id: string) => {
  const confirm = window.confirm("¿Estás seguro de que deseas eliminar este conductor?");
  if (!confirm) return;

  const token = localStorage.getItem("accessToken");
  if (!token) {
    alert("No hay token de autenticación. Por favor inicia sesión.");
    return;
  }

  try {
    const res = await fetch(`https://backfleetguard360-10.onrender.com/api/driver/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("No se pudo eliminar el conductor.");
    }

    // Puedes agregar un callback o recargar la página
    alert("Conductor eliminado exitosamente.");
    window.location.reload(); // O usar router.refresh() si estás en Next.js 13 App Router
  } catch (error) {
    console.error(error);
    alert("Ocurrió un error al eliminar el conductor.");
  }
};


export default function DriversTable({ drivers }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg shadow border border-gray-200 bg-white">
      {/* Versión de escritorio */}
      <div className="hidden lg:block">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="px-6 py-3">Foto</th>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Documento</th>
              <th className="px-6 py-3">Rol</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Teléfono</th>
              <th className="px-6 py-3">Eliminar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {drivers.map((driver) => (
              <tr key={driver.id}>
                <td className="px-6 py-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                    <Image
                      src={driver.photo || "/avatar.png"}
                      alt={driver.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium">{driver.name}</td>
                <td className="px-6 py-4">{driver.documentNumber}</td>
                <td className="px-6 py-4">{driver.rol}</td>
                <td className="px-6 py-4">{driver.email}</td>
                <td className="px-6 py-4">{driver.phoneNumber}</td>
                <td className="px-6 py-4 text-red-600 hover:text-red-800 cursor-pointer"
                onClick={() => handleDelete(driver.id)}>
                  <Trash2 size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Versión móvil */}
      <div className="lg:hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
            <tr>
              <th className="px-6 py-3">Foto</th>
              <th className="px-6 py-3">Nombre</th>
              <th className="px-6 py-3">Rol</th>
              <th className="px-6 py-3">Eliminar</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {drivers.map((driver) => (
              <tr key={driver.id}>
                <td className="px-6 py-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-300">
                    <Image
                      src={driver.photo || "/avatar.png"}
                      alt={driver.name}
                      width={40}
                      height={40}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium">{driver.name}</td>
                <td className="px-6 py-4">{driver.rol}</td>
                <td
                  className="px-6 py-4 text-red-600 hover:text-red-800 cursor-pointer"
                  onClick={() => handleDelete(driver.id)}
                >
                  <Trash2 size={20} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
