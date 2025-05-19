"use client"

import { useDriver } from "@/hooks/useDriver"
import Header from "@/components/Header"
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";
import DriversTable from "@/components/DriversTable";

export default function AdminPage() {
  // Dado de ejemplo, el ID del conductor se establece manualmente
  const driverId = "DRV-2023-001"
  const { driver, loading, error } = useDriver(driverId)
  const router = useRouter();

  // Función para manejar el clic en el botón de editar perfil
  // En este caso, redirige a la página de edición de perfil
  const handleEditProfile = () => {
    console.log("Editar perfil")
    router.push("/editDriver");
  }

  // Implementar lógica para editar perfil
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
    )
  }

  // Si hay un error al cargar los datos del conductor, se muestra un mensaje de error
  if (error) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header userName="Error" />
        <div className="container mx-auto px-4 py-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>Error al cargar los datos del administrador: {error.message}</p>
          </div>
        </div>
      </div>
    )
  }
  // Si no hay datos del conductor, no se muestra nada
  if (!driver) {
    return null
  }

  // Si los datos del conductor están disponibles, se muestran en la tarjeta de perfil
  // y se incluye el botón de editar perfil
  return (
    <div className="min-h-screen bg-gray-100">
      <Header userName={driver.fullName} role="Administrador" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Panel de administración</h2>
            <p className="text-sm text-gray-600 mb-4">
                Gestiona la información de los conductores registrados en el sistema.
            </p>
          </div>
          <div className="hidden lg:block">
            <button
              className="cursor-pointer  flex items-center gap-2 bg-primary hover:bg-primary/70 text-white px-4 py-2 rounded-md font-medium"
            onClick={handleEditProfile}>
              Agregar empleado
              <UserPlus size={20} />
            </button>
          </div>

        </div>
        <div>
            <DriversTable/>
        </div>
        
         <div className="lg:hidden flex justify-center mb-6 p-4">
            <button
              className="cursor-pointer  flex items-center gap-2 bg-primary hover:bg-primary/70 text-white px-4 py-2 rounded-md font-medium"
            onClick={handleEditProfile}>
              Agregar empleado
              <UserPlus size={20} />
            </button>
          </div>
      </div>
    </div>
  )
}
