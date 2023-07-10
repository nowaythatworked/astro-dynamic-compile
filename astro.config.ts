import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'
import node from '@astrojs/node'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
    output: 'server',
    adapter: node({ mode: 'standalone' }),
    integrations: [react()]
});
