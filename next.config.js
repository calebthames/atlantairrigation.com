/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/lander",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
