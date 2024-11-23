"use client"
import React from 'react';

import { FaArrowAltCircleUp } from "react-icons/fa";

const UploadCard: React.FC = () => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(`File selected: ${file.name}`);
    }
  };

  return (
    <div className="w-[375px] h-[453px] border-2 border-dashed border-gray-300 rounded-3xl bg-cinza flex flex-col justify-between cursor-pointer">
      <label
        htmlFor="file-upload"
        className="flex flex-col items-center justify-center text-center w-full h-full flex-grow"
      >
        <FaArrowAltCircleUp className="w-8 h-8 mb-4" />
        <p className="text-[16px] max-w-[220px] text-center">
          Escolha um arquivo ou arraste e solte-o aqui
        </p>
      </label>
      <div className='flex justify-center'>
      <span className="text-[14px] max-w-[340px] text-center mb-8">
        Recomendamos o uso de arquivos de alta qualidade no formato .jpg com menos de 20 MB ou .mp4 com menos de 200 MB
      </span>
      </div>
      <input
        id="file-upload"
        type="file"
        accept="image/*,video/*"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>


  );
};

export default UploadCard;
