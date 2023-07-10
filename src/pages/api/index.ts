import type { APIRoute } from "astro";
import { compile } from "../../compile";

export const get: APIRoute = async () => {
    await compile()
    return new Response(JSON.stringify({ foo: 'bar' }), { status: 200 })
}