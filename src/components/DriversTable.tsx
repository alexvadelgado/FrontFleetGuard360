"use client";

import { Trash2 } from "lucide-react";
import Image from "next/image";

const drivers = [
  {
    id: 1,
    name: "Pablo Ramos",
    document: "1193518535",
    role: "Conductor",
    email: "juanp.ramos@udea.edu.co",
    phone: "3201235486",
    photo: "/avatars/avatar1.png",
  },
  {
    id: 2,
    name: "Alejandro Cataño",
    document: "1125483598",
    role: "Conductor",
    email: "alejandro.c@udea.edu.co",
    phone: "5354123515",
    photo: "/avatars/avatar2.png",
  },
  {
    id: 3,
    name: "Carlos Lopez",
    document: "1000126548",
    role: "Conductor",
    email: "carlos.lopez@udea.edu.co",
    phone: "2103541235",
    photo: "/avatars/avatar3.png",
  },
  {
    id: 4,
    name: "Juan Martinez",
    document: "1242365951",
    role: "Conductor",
    email: "juan.martinez@udea.edu.co",
    phone: "3102315436",
    photo: "/avatars/avatar4.png",
  },
];

export default function DriversTable() {
  return (
    <div className="overflow-x-auto rounded-lg shadow border border-gray-200 bg-white">
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
                        src={driver.photo}
                        alt={driver.name}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{driver.name}</td>
                  <td className="px-6 py-4">{driver.document}</td>
                  <td className="px-6 py-4">{driver.role}</td>
                  <td className="px-6 py-4">{driver.email}</td>
                  <td className="px-6 py-4">{driver.phone}</td>
                  <td className="px-6 py-4 text-red-600 hover:text-red-800 cursor-pointer">
                    <Trash2 size={20} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>

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
                        src={driver.photo}
                        alt={driver.name}
                        width={40}
                        height={40}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{driver.name}</td>
                  <td className="px-6 py-4">{driver.role}</td>
                  <td className="px-6 py-4 text-red-600 hover:text-red-800 cursor-pointer">
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
