import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const isGithubActions = process.env.GITHUB_ACTIONS === "true";

let basePath = "";
let assetPrefix = "";

if (isGithubActions && process.env.GITHUB_REPOSITORY) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");
  basePath = `/${repo}`;
  assetPrefix = `/${repo}/`;
}

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,

  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  /* config options here */
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  // Add markdown plugins here, as desired
});

export default withMDX(nextConfig);
