"use client";

import { useEffect, useState } from "react";
import { useDriver } from "@/hooks/useDriver";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";
import DriversTable from "@/components/DriversTable";

export default function AdminPage() {
  const driverId = "DRV-2023-001";
  const { driver, loading, error } = useDriver(driverId);
  const router = useRouter();

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      // Si no hay accessToken, redirigir
      if (!accessToken) {
        router.push("/login");
        return;
      }

      // Decodificamos el JWT para ver si está expirado
      const payload = JSON.parse(atob(accessToken.split(".")[1]));
      const currentTime = Math.floor(Date.now() / 1000);

      if (payload.exp < currentTime) {
        // Token expirado, intentamos renovar con refreshToken
        if (refreshToken) {
          try {
            const res = await fetch("https://backfleetguard360-10.onrender.com/api/auth/refresh", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ refreshToken }),
            });

            const data = await res.json();

            if (res.ok) {
              localStorage.setItem("accessToken", data.accessToken);
              localStorage.setItem("refreshToken", data.refreshToken);
            } else {
              // Falló el refresh
              localStorage.clear();
              router.push("/login");
              return;
            }
          } catch (err) {
            console.error("Error al renovar token:", err);
            localStorage.clear();
            router.push("/login");
            return;
          }
        } else {
          // No hay refreshToken, redirigimos
          localStorage.clear();
          router.push("/login");
          return;
        }
      }

      setCheckingAuth(false);
    };

    checkAuth();
  }, [router]);

  // Esperar a que se verifique la autenticación
  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        Verificando sesión...
      </div>
    );
  }

  const handleEditProfile = () => {
    router.push("/editDriver");
  };

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
    );
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
    );
  }

  if (!driver) return null;

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
              className="cursor-pointer flex items-center gap-2 bg-primary hover:bg-primary/70 text-white px-4 py-2 rounded-md font-medium"
              onClick={handleEditProfile}
            >
              Agregar empleado
              <UserPlus size={20} />
            </button>
          </div>
        </div>
        <DriversTable />
        <div className="lg:hidden flex justify-center mb-6 p-4">
          <button
            className="cursor-pointer flex items-center gap-2 bg-primary hover:bg-primary/70 text-white px-4 py-2 rounded-md font-medium"
            onClick={handleEditProfile}
          >
            Agregar empleado
            <UserPlus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
