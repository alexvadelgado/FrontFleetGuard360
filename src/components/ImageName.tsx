import React from "react";
import { Driver } from "@/types/driver";

interface ProfileCardProps {
  driver: Driver;
}


const ProfileCard = ({ driver }: ProfileCardProps) => {
  return (
    <div>
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
      </div>
    </div>
  );
};

export default ProfileCard;