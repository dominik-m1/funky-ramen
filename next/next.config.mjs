/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
        { hostname: process.env.IMAGE_HOSTNAME || "localhost" },
        {
          protocol: 'http',
          hostname: '185.180.206.73',
          port: '1337',
          pathname: '/uploads/**',
        },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  pageExtensions: ["ts", "tsx"],
  async redirects() {
    let redirections = [];
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/redirections`
      );
      const result = await res.json();
      const redirectItems = result.data.map(({ source, destination }) => {
        return {
          source: `/:locale${source}`,
          destination: `/:locale${destination}`,
          permanent: false,
        };
      });

      redirections = redirections.concat(redirectItems);

      return redirections;
    } catch (error) {
      return [];
    }
  },
};

export default nextConfig;
