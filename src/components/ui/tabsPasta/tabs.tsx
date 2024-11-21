"use client";

import Link from "next/link";
import { useState } from "react";

function Tabs() {
  const [tab, setTab] = useState("tab1");

  return (
    <div className="w-full flex items-center h-[64px] bg-branco">
        <Link href="/todosPins">
          <button
            className="relative py-2 px-4 mt-1 mx-2 text-center rounded text-[16px] font-semibold hover:bg-cinzaMedio focus:bg-branco"
            onClick={() => setTab("tab1")}
          >
            Todos
            {tab === "tab1" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[55%] h-[3px] bg-preto rounded-full"></span>
            )}
          </button>
        </Link>

        <Link href="/pins">
          <button
            className="relative py-2 px-4 mt-1 mx-2 text-center rounded text-[16px] font-semibold hover:bg-cinzaMedio focus:bg-branco"
            onClick={() => setTab("tab2")}
          >
            Meus Pins salvos
            {tab === "tab2" && (
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[55%] h-[3px] bg-preto rounded-full"></span>
            )}
          </button>
        </Link>
    </div>
  );
}

export default Tabs;
