'use client'

import { useCart } from "@/contexts/cart-context";
import { ShoppingBag } from "lucide-react";



export function CartWidget() {
    const { items } = useCart();
  return (
    <div className="flex items-center gap-2">
      <ShoppingBag size={20} className="text-zinc-500" />
      <span className="text-sm">Cart ({items.length})</span>
    </div>
  );
}