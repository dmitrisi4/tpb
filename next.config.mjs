const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const isUserOrOrgPages = repository.endsWith('.github.io');
const shouldUseBasePath = process.env.GITHUB_ACTIONS === 'true' && repository && !isUserOrOrgPages;
const basePath = shouldUseBasePath ? `/${repository}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath || undefined,
};

export default nextConfig;
