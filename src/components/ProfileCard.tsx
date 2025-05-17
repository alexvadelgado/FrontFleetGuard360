import React from "react";
import { Driver } from "@/types/driver";

interface ProfileCardProps {
  driver: Driver;
}

interface ProfileItemProps {
  label: string;
  value: string;
}

const ProfileItem = ({ label, value }: ProfileItemProps) => (
  <div className="py-2">
    <p className="text-sm text-gray-600 font-medium">{label}</p>
    <p className="text-base text-gray-800">{value}</p>
  </div>
);

const ProfileCard = ({ driver }: ProfileCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden p-8">
      <div className="p-4">
        <div className="flex flex-col items-center mb-6">
          <div className="relative mb-2">
            <div className="h-24 w-24 bg-blue-500 rounded-full flex items-center justify-center overflow-hidden">
              {driver.avatarUrl ? (
                <img 
                  src={driver.avatarUrl} 
                  alt={driver.fullName} 
                  className="h-full w-full object-cover"
                />
              ) : (
                <span className="text-white text-3xl font-medium">
                  {driver.fullName.charAt(0)}
                </span>
              )}
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-gray-800">
            {driver.fullName}
          </h3>
          <p className="text-gray-600">{driver.role}</p>
        </div>
        
         {/* Información del perfil */}
        <div className="flex flex-row justify-around gap-x-6 gap-y-1">
          <div>
              <ProfileItem label="ID" value={driver.id} />
              <ProfileItem label="Fecha de nacimiento" value={driver.birthDate} />
              <ProfileItem label="Teléfono" value={driver.phone} />
          </div>
          <div>
            <ProfileItem label="Correo electrónico" value={driver.email} />
            <ProfileItem label="Licencia de conducción" value={driver.licenseNumber} />
            <ProfileItem label="Dirección" value={driver.address} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;