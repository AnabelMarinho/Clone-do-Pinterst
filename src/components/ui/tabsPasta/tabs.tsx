"use client";

import Pins from "@/app/(pages)/(tabs)/pins/page";
import Todos from "@/app/(pages)/(tabs)/todosPins/page";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Tabs() {
  const pathname = usePathname();

  // Inicialize o estado com "/todosPins" por padrão
  const [activeTab, setActiveTab] = useState("/todosPins");

  useEffect(() => {
    // Define a tab ativa com base na URL
    if (pathname === "/todosPins" || pathname === "/pins") {
      setActiveTab(pathname);
    }
  }, [pathname]);

  // Função para verificar se a rota atual é a ativa
  const isActive = (path: string) => activeTab === path;

  return (
    <div>
      <div className="w-full flex items-center h-[64px] bg-branco p-4 gap-8">
       
          <button
            className={`relative py-2 ml-2 text-center rounded text-[16px] font-semibold hover:bg-cinzaMedio focus:bg-branco ${isActive("/todosPins")}`}
            onClick={() => setActiveTab("/todosPins")}
          >
            Todos
            {isActive("/todosPins") && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[100%] h-[3px] bg-preto rounded-full"></span>
            )}
          </button>

          <button
            className={`relative py-2 text-center rounded text-[16px] font-semibold hover:bg-cinzaMedio focus:bg-branco ${isActive("/pins")}`}
            onClick={() => setActiveTab("/pins")}
          >
            Meus Pins salvos
            {isActive("/pins") && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[55%] h-[3px] bg-preto rounded-full"></span>
            )}
          </button>
        
      </div>

      {/* Renderiza os componentes dependendo da aba ativa */}
      {isActive("/todosPins") && <Todos />}
      {isActive("/pins") && <Pins />}
    </div>
  );
}

export default Tabs;
