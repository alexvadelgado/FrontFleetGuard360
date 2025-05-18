"use client"

import { useDriver } from "@/hooks/useDriver"
import Header from "@/components/Header"
import ImageName from "@/components/ImageName"
import { useRouter } from "next/navigation"
import { useState, useEffect } from "react"

export default function ProfilePage() {
  const driverId = "DRV-2023-001"
  const { driver, loading, error } = useDriver(driverId)
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [birthDate, setBirthdate] = useState("")

  const [formError, setFormError] = useState("")

  useEffect(() => {
    if (driver) {
      setEmail(driver.email || "")
      setPhone(driver.phone || "")
      setAddress(driver.address || "")
      setBirthdate(driver.birthDate || "")
    }
  }, [driver])

  const isOver18 = (dateStr: string) => {
    const birth = new Date(dateStr)
    const today = new Date()
    const age = today.getFullYear() - birth.getFullYear()
    const m = today.getMonth() - birth.getMonth()
    return age > 18 || (age === 18 && m >= 0 && today.getDate() >= birth.getDate())
  }

  const handleSave = async () => {
    setFormError("")

    if (email.length > 40) return setFormError("El correo debe tener como máximo 40 caracteres.")
    if (phone.length > 10) return setFormError("El teléfono debe tener como máximo 10 caracteres.")
    if (address.length > 10) return setFormError("La dirección debe tener como máximo 10 caracteres.")
    if (!isOver18(birthDate)) return setFormError("Debes tener más de 18 años.")

    try {
      const response = await fetch(`http://localhost:8080/api/drivers/${driverId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, phone, address, birthDate }),
      })

      if (!response.ok) throw new Error("Error al actualizar el perfil")
      alert("Perfil actualizado correctamente")
      router.push("/driver")
    } catch (error) {
      console.error(error)
      setFormError("Error al guardar los cambios.")
    }
  }

  const goToPassword = () => router.push("/password")
  const cancelEdit = () => router.push("/driver")

  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error: {error.message}</p>
  if (!driver) return null

  return (
    <div className="min-h-screen bg-gray-100">
      <Header userName={driver.fullName} />

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold text-gray-800">Editar perfil</h2>
            <p className="text-sm text-gray-600 mb-4">Actualiza tu información personal.</p>
            {formError && <p className="text-red-500 mb-4">{formError}</p>}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden p-8">
          <div className="flex justify-end">
            <button onClick={goToPassword} className="hidden lg:block rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              Cambiar contraseña
            </button>
          </div>

          <ImageName driver={driver} />

          <div className="space-y-7">
            <div className="flex flex-col lg:flex-row lg:justify-around">
              <div className="space-y-7">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                  <input
                    type="number"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-7">
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
                  <input
                    type="date"
                    id="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="lg:hidden flex justify-center">
                <button onClick={goToPassword} className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700">
                  Cambiar contraseña
                </button>
              </div>

              <div className="flex justify-around lg:justify-end space-x-2">
                <button onClick={cancelEdit} className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700">
                  Cancelar
                </button>
                <button onClick={handleSave} className="rounded-md bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700">
                  Guardar cambios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
