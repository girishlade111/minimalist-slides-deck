/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/minimalist-slides-deck",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig