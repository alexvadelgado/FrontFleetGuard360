"use client"

import { useDriver } from "@/hooks/useDriver"
import Header from "@/components/Header"
import ProfileCard from "@/components/ProfileCard"
import EditButton from "@/components/EditButton"
import { useRouter } from "next/navigation";

export default function ProfilePage() {
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
            <p>Error al cargar los datos del conductor: {error.message}</p>
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
      <Header userName={driver.fullName} role={driver.role} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Mi Perfil</h2>
            <p className="text-sm text-gray-600 mb-4">
                Visualiza y actualiza tu información personal.
            </p>
          </div>
          <EditButton onClick={handleEditProfile}/>
        </div>
        <ProfileCard driver={driver} />
      </div>
    </div>
  )
}
