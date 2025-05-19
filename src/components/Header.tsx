"use client"

import { LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

// Definición de las propiedades del componente Header
interface HeaderProps {
  userName: string
  role?: string
}

// Componente de encabezado que muestra el nombre del usuario y un botón de cierre de sesión
// El componente también puede recibir un rol opcional para mostrarlo
export default function Header({ userName, role}: HeaderProps) {
  const router = useRouter();
  const handleLogout = () => {
    // Implementar lógica de cierre de sesión
    console.log("Cerrando sesión...")
    router.push("/login");
  }

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="bg:flex bg:justify-between">
          <h1 className="text-xl font-bold text-primary">Portal de Conductor</h1>
          <p className="text-sm text-gray-600 lg:hidden">
            Hola, {role} <span className="font-medium">{userName}</span>
          </p>
        </div>
        <div className="flex flex-row items-center gap-4">
        <p className="text-sm text-gray-600 hidden lg:block">
            Hola, <span className="font-medium">{userName}</span>
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
}
