"use client"

import { useState, useEffect } from "react"
import type { Driver } from "@/types/driver"

export function useDriver(driverId: string) {
  const [driver, setDriver] = useState<Driver | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchDriver = async () => {
      setLoading(true)
      try {
        // Simulando una llamada a API
        // En producción, esto sería: const response = await fetch(`/api/drivers/${driverId}`)

        // Datos de ejemplo
        const mockDriver: Driver = {
          id: "DRV-2023-001",
          fullName: "Carlos Rodríguez",
          role: "Conductor",
          email: "carlos.rodriguez@ejemplo.com",
          birthDate: "15/04/1985",
          licenseNumber: "LIC-78945-B2",
          phone: "+34 612 345 678",
          address: "Calle Principal 123, Madrid, España",
          avatarUrl: "https://img.freepik.com/psd-gratis/3d-ilustracion-persona-gafas-sol_23-2149436188.jpg?semt=ais_hybrid&w=740",
        }

        // Simulando tiempo de respuesta de API
        setTimeout(() => {
          setDriver(mockDriver)
          setLoading(false)
        }, 500)
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Error desconocido"))
        setLoading(false)
      }
    }

    fetchDriver()
  }, [driverId])

  return { driver, loading, error }
}
