import Link  from "next/link";
import Image from "next/image";


export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
       href="/" 
       className=" group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end" 
      >

       <Image 
       src="/moletom-ai-side.png" 
       alt="Moleton" 
       width={860} 
       height={860}
       quality={100}
       className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
       />

       <div className="absolute bottom-28  right-28  h-12 flex items-center gap-2 rounded-full max-w-[280px] border-2 border-zinc-500 bg-black/90 p-1 pl-5">
         <span className="text-sm truncate">Moletom AI Side</span>
         <span className="flex h-full items-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
         </span>
       </div>
      </Link>

      <Link
       href="/" 
       className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end" 
      >

       <Image 
       src="/moletom-java.png" 
       alt="Moleton" 
       width={860} 
       height={860}
       quality={100}
       className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
       />

       
       <div className="absolute bottom-10  right-10  h-12 flex items-center gap-2 rounded-full max-w-[280px] border-2 border-zinc-500 bg-black/90 p-1 pl-5">
         <span className="text-sm truncate">Moletom Java</span>
         <span className="flex h-full items-center rounded-full bg-violet-500 px-4 font-semibold">
            R$129
         </span>
       </div>
      </Link>

      <Link
       href="/" 
       className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end" 
      >

       <Image 
       src="/camiseta-dowhile-2022.png" 
       alt="Camiseta" 
       width={860} 
       height={860}
       quality={100}
       className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
       />
        <div className="absolute bottom-10  right-10  h-12 flex items-center gap-2 rounded-full max-w-[280px] border-2 border-zinc-500 bg-black/90 p-1 pl-5">
         <span className="text-sm truncate">Camiseta Dowhile</span>
         <span className="flex h-full items-center rounded-full bg-violet-500 px-4 font-semibold">
            R$79
         </span>
       </div>
      </Link>
    </div>
  );
}
 