import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

import UploadCard from "@/components/ui/uplodcardPasta/uplodcard";

export const Criar = () => {

    return(
    
     <main className="w-full flex">
     <div className="w-[85px] h-[100vh] border-x fixed bg-branco">
 
      <div className="w-full h-[80px] flex items-center justify-center border-t border-gray-300 z-10">
      <MdKeyboardDoubleArrowRight className="w-[30px] h-[30px]" />
      </div>
      
      <div className="w-full h-[80px] flex items-center justify-center border-b border-gray-300">
      <FaPlus className="w-[30px] h-[22px]" />
      </div>
     </div>

      <div className="w-full flex flex-col">
      <div className="w-full h-[80px] content-center border-y border-gray-300 fixed bg-branco -z-10">
       <h1 className="text-xl font-semibold ml-[120px]">Criar Pin</h1>
      </div>

       <div className="ml-[200px] mt-[100px] h-screen -z-20">
          <UploadCard />
          <hr className="w-[375px] mt-6 mb-6 border-1 border-gray-300"></hr>
          <button className="w-[375px] bg-cinza rounded-full p-2 font-semibold">Salvar do URL</button>
       </div>
       
       </div>

     </main>
    );
};

export default Criar;