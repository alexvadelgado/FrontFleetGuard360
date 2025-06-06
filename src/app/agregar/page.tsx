"use client"

import { useDriver } from "@/hooks/useDriver"
import Header from "@/components/Header"
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";
import DriversTable from "@/components/DriversTable";
import { useState } from "react";

export default function Agregar() {
    console.log('Cargo')
    const driverId = "DRV-2023-001"
    const { driver, loading, error } = useDriver(driverId)

    const [IsVisible, setIsVisible] = useState(false)

    const mostrarPopUp = () => {
        console.log("antes dle cambio ", IsVisible)

        setIsVisible(prev => !prev)

        console.log(IsVisible)

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

    return (
        <div className="min-h-screen bg-gray-100">
            <Header userName={driver.fullName} role="Administrador" />
            <div className="container mx-auto px-4 py-8">
                <div className="flex justify-between items-center mb-6">
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold text-gray-800">Panel de administración</h2>
                        <p className="text-sm text-gray-600 mb-4">Gestiona la información de los conductores registrados en el sistema.</p>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-sm overflow-hidden p-8">
                    <div className="flex justify-end mb-10">
                        <button className="cursor-pointer rounded-md bg-primary py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700" onClick={mostrarPopUp}>
                            Agregar
                        </button>
                    </div>

                    {/* <ImageName driver={driver} /> */}
                    <div className="space-y-7">
                        <div className=" space-y-7 flex flex-col lg:flex-row lg:justify-around">
                            <div className="space-y-7">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre Completo</label>
                                    <input
                                        type="name"
                                        id="name"
                                        // value={email}
                                        // onChange={(e) => setEmail(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                        required
                                    />
                                    {/* {email.length > 40 && (
                                        <p className="text-red-500 text-sm mt-1">
                                            El correo debe tener como máximo 40 caracteres.
                                        </p>
                                    )} */}
                                </div>

                                <div>
                                    <label htmlFor="id" className="block text-sm font-medium text-gray-700">Documento de identidad</label>
                                    <input
                                        type="id"
                                        id="id"
                                        // value={phone}
                                        // onChange={(e) => setPhone(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                        required
                                    />
                                    {/* {phone.length > 10 && (
                                        <p className="text-red-500 text-sm mt-1">
                                            El teléfono debe tener como máximo 10 caracteres.
                                        </p>
                                    )} */}
                                </div>
                                <div>
                                    <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">Fecha de nacimiento</label>
                                    <input
                                        type="date"
                                        id="birthDate"
                                        // value={birthDate}
                                        // onChange={(e) => setBirthdate(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                        required
                                    />
                                    {/* {!isOver18(birthDate) && (
                                        <p className="text-red-500 text-sm mt-1">
                                            Debes tener más de 18 años.
                                        </p>
                                    )} */}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                        Teléfono
                                    </label>
                                    <input type="phone" id="phone"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                        required />

                                </div>
                            </div>

                            <div className="space-y-7">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                        Correo electrónico
                                    </label>
                                    <input type="email" id="email"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                        required />

                                </div>
                                <div>
                                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                        Rol
                                    </label>
                                    <input type="role" id="role"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                        required />

                                </div>
                                <div>
                                    <label htmlFor="license" className="block text-sm font-medium text-gray-700">
                                        Licencia de conducción
                                    </label>
                                    <input type="license" id="license"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                                        required />

                                </div>
                                <div>
                                    <label htmlFor="address" className="block text-sm font-medium text-gray-700">Dirección</label>
                                    <input
                                        type="text"
                                        id="address"
                                        // value={address}
                                        // onChange={(e) => setAddress(e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm "
                                        required
                                    />
                                    {/* {address.length > 10 && (
                                        <p className="text-red-500 text-sm mt-1">
                                            La dirección debe tener como máximo 10 caracteres.
                                        </p>
                                    )} */}
                                </div>


                            </div>
                        </div>

                        <div className="flex flex-col space-y-4">

                            <div className="cursor-pointer flex justify-around lg:center space-x-2">
                                <button className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 hover:text-primary hover:border-primary w-50">
                                    Foto
                                </button>


                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
            {IsVisible && (
                            <div className="p-4 bg-blue-100 rounded z-999">Este es el popup</div>
                        )}
        </div>
        
    );
}
