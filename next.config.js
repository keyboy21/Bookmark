const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        // This doesn't work for 'Cache-Control' key (works for others though):
        source: "/_next/image(.*)",
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
    ];
  },
};

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
  },
});
