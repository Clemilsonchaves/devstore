import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";

interface SearchProps {
  searchParams?: {
    q?: string;
}

}

async function searchProducts(query : string): Promise<Product[]> {
  const response = await api(`/products/search?q=${query}`, {	
      
      next: {
        revalidate: 60 * 60,  // 1 hour
      },
    });

  const products = await response.json()

  return products
}




export default async function Search({ searchParams }: SearchProps) {
  const query = searchParams?.q || "";

  if (!query) {
    redirect('/');
  }

  const products = await searchProducts(query);

  return (
    <div className="flex flex-col gap-4">

      
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((product) => {  
          return (
             <Link
                key={product.id}
                href={`/product/${product.slug}`}
                className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
              >
            <Image
              src={product.image}
              alt={"Moletom Never Stop Learning"}
              width={480}
              height={480}
              quality={100}
              className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
            />

            <div className="absolute bottom-10  right-10  h-12 flex items-center gap-2 rounded-full max-w-[280px] border-2 border-zinc-500 bg-black/90 p-1 pl-5">
              <span className="text-sm truncate">
                {product.title}
              </span>
              <span className="flex h-full items-center rounded-full bg-violet-500 px-4 font-semibold">
                { product.price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </span>
            </div>
          </Link>
        
          )
        })}
        
         
      </div>
    </div>
  );
}



