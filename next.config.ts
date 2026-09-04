import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["gsap", "@gsap/react"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.belconteudos.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
