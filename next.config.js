/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        mdx: true,
        serverComponentsExternalPackages: ['mongoose']
    }
}

module.exports = nextConfig
