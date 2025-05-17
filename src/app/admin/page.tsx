"use client"

import { useDriver } from "@/hooks/useDriver"
import Header from "@/components/Header"
import ProfileCard from "@/components/ProfileCard"
import EditButton from "@/components/EditButton"

export default function ProfilePage() {
  // En un caso real, el ID vendría de la autenticación o de parámetros de ruta
  const driverId = "DRV-2023-001"
  const { driver, loading, error } = useDriver(driverId)

  const handleEditProfile = () => {
    console.log("Editar perfil")
    // Implementar lógica para editar perfil
  }

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

  if (!driver) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header userName={driver.fullName} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Mi Perfil</h2>
            <p className="text-sm text-gray-600 mb-4">
                Visualiza y actualiza tu información personal admin.
            </p>
          </div>
        
          <EditButton onClick={handleEditProfile} />
        </div>
        <ProfileCard driver={driver} />
      </div>
    </div>
  )
}
