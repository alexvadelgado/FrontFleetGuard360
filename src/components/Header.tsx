"use client"

import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  userName: string
}

export default function Header({ userName }: HeaderProps) {
  const handleLogout = () => {
    // Implementar lógica de cierre de sesión
    console.log("Cerrando sesión...")
  }

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="bg:flex bg:justify-between">
          <h1 className="text-xl font-bold text-blue-600">Portal de Conductor</h1>
          <p className="text-sm text-gray-600">
            Hola, <span className="font-medium">{userName}</span>
          </p>
        </div>
        <Button
          variant="outline"
          className="flex items-center gap-2 text-gray-700 hover:text-blue-600 hover:border-blue-600"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          <span>Cerrar sesión</span>
        </Button>
      </div>
    </header>
  )
}
