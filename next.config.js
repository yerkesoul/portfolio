/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
  // This is important for GitHub Pages
  assetPrefix: '/portfolio/',
}

module.exports = nextConfig

