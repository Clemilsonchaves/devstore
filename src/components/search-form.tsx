'use client'

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";
 
export default function SearchForm() { 
    const router = useRouter();

    const serchParams = useSearchParams();

    const query = serchParams.get('q');
    
    function handleSearch(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);


        const query = data.q 

        if (!query) {
            return null
            
        }
        router.push(`/search?q=${query}`);
    }
        
    
    return (
        <form 
            onSubmit={handleSearch}
            className="flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700 "
        >

            <Search size={20} className="w-5 h-5 text-zinc-500" />
            <input
            name="q"
            defaultValue={query ?? ""}
            placeholder="Buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none text-zinc-500 placeholder:text-zinc-500 "
            required
            
          />
        </form>
)

}