"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { InboxIcon as EnvelopeIcon, LockOpenIcon as LockClosedIcon } from "lucide-react"

export default function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("admin")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de autenticación
    console.log("Iniciando sesión...")
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md space-y-6 text-center">
        {/* Título principal */}
        <h1 className="text-5xl font-bold text-primary md:text-4xl">Sistema de Gestión de Conductores</h1>

        {/* Subtítulo */}
        <p className="text-gray-600">Inicia sesión para acceder al sistema</p>

        {/* Cuadro de inicio de sesión */}
        <div className="rounded-3xl bg-white p-8 shadow-2xl">
          {/* Título del formulario */}
          <div className="mb-6 flex flex-col items-start">
            <h2 className="text-2xl font-bold text-gray-800">Iniciar sesión</h2>
            <p className="mt-2 text-sm text-gray-600">Selecciona tu rol e ingresa tus credenciales</p>
          </div>

          {/* Selector de roles */}
          <div className="mb-6 grid grid-cols-2 gap-2 rounded-md bg-secondary p-1">
            <button
              className={`rounded-md py-2 text-sm font-medium transition-colors ${
                selectedRole === "admin" ? "bg-white text-black" : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedRole("admin")}
              type="button"
            >
              Administrador
            </button>
            <button
              className={`rounded-md py-2 text-sm font-medium transition-colors ${
                selectedRole === "driver" ? "bg-white text-black" : "bg-transparent text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setSelectedRole("driver")}
              type="button"
            >
              Conductor
            </button>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
                Correo electrónico
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                </div>
                <Input id="email" type="email" placeholder="Ingresa tu usuario" className="pl-10" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-left text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-gray-400" />
                </div>
                <Input id="password" type="password" placeholder="Ingresa tu Contraseña" className="pl-10" required />
              </div>
            </div>

            <Button type="submit" className="mt-6 w-1/3 bg-primary py-2 text-white hover:bg-blue-700">
              Iniciar sesión
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}