'use client';

import { createContext, useContext, ReactNode, useState } from "react";

interface CartItem {
    productId: number;
    quantity: number;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (productId: string) => void;
}

const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    function addToCart(productId: string) {
        setCartItems((state) => {
            const productInCart = state.some((item) => item.productId === Number(productId))

            if (productInCart) {
                return state.map((item) => {
                    if (item.productId === Number(productId)) {
                        return { ...item, quantity: item.quantity + 1 };
                    } else {
                        return item;
                    }
                });
            } else {
                return [...state, { productId: Number(productId), quantity: 1 }];
            }
        });
    }
    return (
        <CartContext.Provider value={{ items: cartItems, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);