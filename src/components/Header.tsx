"use client"

import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface HeaderProps {
  userName: string
  role?: string
}

export default function Header({ userName, role }: HeaderProps) {
  const router = useRouter()

  const handleLogout = () => {
    // Limpia tokens de localStorage
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    
    // Opcional: limpiar cualquier otro dato (user info, etc.)
    localStorage.clear()

    console.log("Sesión cerrada")

    // Redirige al login
    router.push("/login")
  }

  const commonHeader = (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="bg:flex bg:justify-between">
          <h1 className="text-xl font-bold text-primary">
            {role === "Administrador" ? "Portal de Administrador" : "Portal de Conductor"}
          </h1>
          <p className="text-sm text-gray-600 lg:hidden">
            Hola, {role} <span className="font-medium">{userName}</span>
          </p>
        </div>
        <div className="flex flex-row items-center gap-4">
          <p className="text-sm text-gray-600 hidden lg:block">
            Hola, {role} <span className="font-medium">{userName}</span>
          </p>
          <Button
            variant="outline"
            className="cursor-pointer flex items-center gap-2 text-gray-700 hover:text-primary hover:border-primary"
            onClick={handleLogout}
          >
            <LogOut size={18} />
            <span>Cerrar sesión</span>
          </Button>
        </div>
      </div>
    </header>
  )

  return commonHeader
}
