'use client'
import { useCart } from "@/contexts/cart-context";

export interface AddToCartButtonProps {
    productId: number;
}

export function AddToCartButton({ productId }: AddToCartButtonProps) {
    
    const { addToCart } = useCart();

    function handleAddProductToCart() {
        addToCart(productId.toString());
    }

  return (
     <button 
       type="button"
       onClick={handleAddProductToCart}
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-800 cursor-pointer hover:bg-emerald-600 transition-all hover:text-zinc-900  font-semibold text-white">
          Adicionar ao carrinho
     </button> 
  )
}
