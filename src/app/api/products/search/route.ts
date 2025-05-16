import { z } from 'zod';
import { NextRequest } from 'next/server';
import data from '../data.json';

export async function GET(
  request: NextRequest,
 
) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

    const { searchParams } = request.nextUrl;

  const query = z.string().parse(searchParams.get('q'));

 
 
  // Find the product(s) matching the query
  const products = data.products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return Response.json(products);
}