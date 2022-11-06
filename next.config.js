/** @type {import('next').NextConfig} */
const prod = process.env.NODE_ENV === 'production'

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: prod ? false : true,
})
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        // This doesn't work for 'Cache-Control' key (works for others though):
        source: '/_next/image(.*)',
        headers: [
          {
            key: "Cache-Control",
            // Instead of this value:
            value: "public, no-cache, no-store",
            // Cache-Control response header is `public, max-age=60` in production
            // and `public, max-age=0, must-revalidate` in development
          },
        ],
      },
    ]
  },
  swcMinify: true,
}

module.exports = withPWA(nextConfig)



// const withPWA = require("next-pwa");

// module.exports = withPWA({
//   reactStrictMode: true,
//   images: {
//     domains: ['lh3.googleusercontent.com'],
//   },
//   async headers() {
//     return [
//       {
//         // This doesn't work for 'Cache-Control' key (works for others though):
//         source: "/_next/image(.*)",
//         headers: [
//           {
//             key: "Cache-Control",
//             // Instead of this value:
//             value: "public, no-cache, no-store",
//             // Cache-Control response header is `public, max-age=60` in production
//             // and `public, max-age=0, must-revalidate` in development
//           },
//         ],
//       },
//     ];
//   },
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//     disable: process.env.NODE_ENV === "development",
//   },
// });
