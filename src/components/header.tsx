import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
return (
    <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
            <Link href="/" className="text-2xl font-extrabold text-zinc-50">
             DevStore
            </Link>

            <form className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700 ">
                <Search size={20} className="text-zinc-500" />
                <input
                    
                    placeholder="Buscar produtos..."
                    className="flex-1 bg-transparent text-sm text-zinc-500 placeholder:text-zinc-500 focus:outline-none"
                    
                 />
            </form>
        </div>

        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-zinc-500" />
                <span className="text-sm">Cart (0)</span>
            </div>

            <div className="w-px h-4 bg-zinc-700"/>

            <Link href="/" className="flex items-center gap-2 hover:underline">
              <span className="text-sm"> Account</span>
              <Image 
              src="https://github.com/clemilsonchaves.png" 
              alt={"img"} 
              className="h-6 w-6 rounded-full border-2 border-zinc-800"
                width={24}
                height={24}
              />
            </Link>

        </div>
    </div>
)

}