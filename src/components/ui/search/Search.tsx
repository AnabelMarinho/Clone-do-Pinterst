"use client";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosCloseCircle} from "react-icons/io";

export const Search = () => {
    const [isInputActive, setIsInputActive] = useState(false);
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="flex items-center h-[48px] rounded-full bg-cinza hover:bg-cinzaMedio
         focus-within:outline focus-within:outline-azul">
            {!isInputActive && (
                <FaSearch 
                    className={`text-cinzaEscuro ml-4 cursor-pointer hover:text-cinza-escuro transition-colors`} 
                    onClick={() => setIsInputActive(true)}
                />
            )}

           
            <input
                className={`flex-1 bg-transparent outline-none placeholder-cinzaEscuro py-1 px-2 
                    ${isInputActive ? 'ml-2' : ''} 
                    focus:ml-4`}
                placeholder="Pesquisar"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setIsInputActive(true)}
                onBlur={() => setIsInputActive(false)} 
            />

            {(isInputActive || searchValue) && (
                <div
                className="w-[48px] h-[48px] flex items-center justify-center cursor-pointer rounded-full hover:bg-[#d5d7db] transition"
                onClick={() => setSearchValue("")} 
                >
                <IoIosCloseCircle className="text-preto w-[20px] h-[20px]" />
                </div>
            
            )}
        </div>
    );
};
