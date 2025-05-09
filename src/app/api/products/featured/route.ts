import data from "../data.json";

export async function GET() {
    // Simulate a delay to mimic a real API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    const featuredProducts = data.products.filter(product => product.featured);

    return Response.json(featuredProducts);
}