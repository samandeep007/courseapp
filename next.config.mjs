/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
      },
      images: {
        domains: ['images.unsplash.com', 'images.pexels.com'],
      } // This is not required, but is used to allow images from Unsplash to be used in the app
      
};

export default nextConfig;
