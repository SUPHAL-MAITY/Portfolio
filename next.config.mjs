/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
            pathname: '/photo-**',
          },
          {
            protocol: 'https',
            hostname: 'ddbconsultants.ca',
            port: '',
            pathname: '/wp-content/uploads/**',
          },
        ],
      },
};

export default nextConfig;
