/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/next-config-redirect",
        destination: "https://nextjs.org",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
