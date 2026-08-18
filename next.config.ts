import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Haskils-Library" : "",
  assetPrefix: isProd ? "/Haskils-Library/" : "",
  /* config options here */
};

export default nextConfig;
