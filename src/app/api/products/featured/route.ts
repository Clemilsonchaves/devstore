import data from "../data.json";

export async function GET() {
    // Simula um atraso para imitar uma chamada real de API
    await new Promise(resolve => setTimeout(resolve, 2000));
    const featuredProducts = data.products.filter(product => product.featured);
    return Response.json(featuredProducts);
}
