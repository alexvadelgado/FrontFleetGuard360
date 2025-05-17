import React from "react";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EditButtonProps {
  onClick: () => void;
}

const EditButton = ({ onClick }: EditButtonProps) => {
  return (
    <Button 
      variant="outline"
      size="sm"
      className="flex items-center gap-2 bg-white border border-gray-300 text-gray-800 rounded-full shadow-sm hover:bg-gray-50"
      onClick={onClick}
    >
      <Pencil className="h-4 w-4" />
      Editar perfil
    </Button>
  );
};

export default EditButton;
