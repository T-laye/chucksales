/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  webpack: (config) => {
    config.externals.push("pino-pretty", "lokijs", "encoding");
    return config;
  },

  // async headers() {
  //   return [
  //     {
  //       // Apply these headers to all routes in your application
  //       source: "/(.*)",
  //       headers: [
  //         {
  //           key: "Content-Security-Policy",
  //           value: `
  //             frame-ancestors 'self' https://*.chucksales.com https://chucksales.com https://verify.walletconnect.com https://verify.walletconnect.org;
  //           `.replace(/\n/g, ""), // Remove newlines for CSP header
  //         },
  //       ],
  //     },
  //   ];
  // },
};

export default nextConfig;
