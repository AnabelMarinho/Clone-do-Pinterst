import Image from 'next/image';
import { Search } from "@/components/ui/searchPasta/Search";
import { FaBell, FaUserCircle } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";

import { Popover, PopoverContent } from '../popoverPasta/popover';
import { PopoverTrigger } from '@radix-ui/react-popover';

export const Header = () => {

    return(
        <header className="w-full h-[80px] gap-2 bg-branco p-5 flex items-center">
            <div className="hover:bg-cinza p-3 rounded-full  flex-shrink-0 w-[50px] h-[50px]">
                <Image 
                    width={40} 
                    height={40} 
                    alt="Logo Pinterest" 
                    src="/logo.webp" 
                    className="object-contain"
                />
            </div>

            <div>
                <Popover>
                    <PopoverTrigger className="flex justify-between gap-2 items-center cursor-pointer px-4 py-2 rounded-full bg-branco hover:bg-preto hover:text-branco transition">
                        <span className="whitespace-nowrap">Página inicial</span>
                        <IoIosArrowDown className="text-cinzaEscuro w-[20px] h-[20px]" />
                    </PopoverTrigger>
                    <PopoverContent
                        className="bg-branco p-2 rounded-lg shadow-lg flex flex-col w-[180px]"
                    >
                        <button
                            className="w-full px-4 py-2 text-sm text-start text-preto bg-branco hover:bg-cinza rounded-lg transition"
                        >
                            Página inicial
                        </button>
                        <button
                            className="w-full px-4 py-2 text-sm text-start text-preto bg-branco hover:bg-cinza rounded-lg transition"
                        >
                            Explorar
                        </button>
                        <button
                            className="w-full px-4 py-2 text-sm text-start text-preto bg-branco hover:bg-cinza rounded-lg transition"
                        >
                            Criar
                        </button>
                    </PopoverContent>
                </Popover>
            </div>

            <div className="w-full max-w-[1016px]">
                <Search />
            </div>

            <div className="flex items-center mr-4">
                <div className="w-[48px] h-[48px] flex items-center justify-center cursor-pointer rounded-full hover:bg-cinza transition">
                    <FaBell className="text-cinzaEscuro w-[24px] h-[24px]" />
                </div>

                <div className="w-[48px] h-[48px] flex items-center justify-center cursor-pointer rounded-full hover:bg-cinza transition">
                    <IoChatbubbleEllipses className="text-cinzaEscuro w-[24px] h-[24px]" />
                </div>

                <div className="w-[48px] h-[48px] flex items-center justify-center cursor-pointer rounded-full hover:bg-cinza transition">
                    <a href="/profile">
                        <FaUserCircle className="text-cinzaEscuro w-[20px] h-[20px]" />
                    </a>
                </div>

                <div className="w-[24px] h-[24px] flex items-center justify-center cursor-pointer rounded-full hover:bg-cinza transition">
                    <IoIosArrowDown className="text-cinzaEscuro w-[20px] h-[20px]" />
                </div>
            </div>
        </header>

    );
};