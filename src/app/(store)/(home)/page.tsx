import Link  from "next/link"; 
import Image from "next/image";
import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import { Metadata } from "next";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured', {
      
      next: {
        revalidate: 60 * 60,  // 1 hour
      },
    });

  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home',
  description: 'Loja de moletons',
};
  

  
export default async function Home() {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
       href={`/product/${highlightedProduct.slug}`}
       className=" group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end" 
      >

       <Image 
       src={highlightedProduct.image} 
       alt="Moleton" 
       width={840} 
       height={840}
       quality={100}
       className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
       />

       <div className="absolute bottom-28  right-28  h-12 flex items-center gap-2 rounded-full max-w-[280px] border-2 border-zinc-500 bg-black/90 p-1 pl-5">
         <span className="text-sm truncate">{highlightedProduct.title}</span>
         <span className="flex h-full items-center rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            })}
         </span>
       </div>
      </Link>

  {otherProducts.map((product) => {
    return (
      <Link
        href={`/product/${product.slug}`}
        key={product.id}
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
      >
        <Image
          src={product.image}
          alt="Moleton"
          width={860}
          height={860}
          quality={100}
          className="group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />

        <div className="absolute bottom-10  right-10  h-12 flex items-center gap-2 rounded-full max-w-[280px] border-2 border-zinc-500 bg-black/90 p-1 pl-5">
          <span className="text-sm truncate">{product.title}</span>
          <span className="flex h-full items-center rounded-full bg-violet-500 px-4 font-semibold">
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>
    );
  })}

      
    </div>
  );
}
