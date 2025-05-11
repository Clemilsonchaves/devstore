import { NextResponse } from "next/server"
import data from "./data.json"

export async function GET() {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // Simulate a delay of 1 second
    return  NextResponse.json(data.products)
}