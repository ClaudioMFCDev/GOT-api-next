/** @type {import('next').NextConfig} */
const nextConfig = {
  //add image api library
  images: {
    domains: ['thronesapi.com']
  },

    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },

};

export default nextConfig;
