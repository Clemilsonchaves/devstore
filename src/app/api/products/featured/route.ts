import { api } from "@/data/api";
import data from "../data.json";
import { Product } from "@/data/types/product";

export async function GET() {
    // Simulate a delay to mimic a real API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    const featuredProducts = data.products.filter(product => product.featured);

    return Response.json(featuredProducts);
}

async function getFeaturedProducts(): Promise<Product[]> {
    await new Promise(r => setTimeout(r, 2000)); // simula atraso
    const response = await api('/products/featured', {
        next: { revalidate: 5 },
    });
    const products = await response.json();
    return products;
}  