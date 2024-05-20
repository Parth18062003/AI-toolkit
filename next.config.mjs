/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pbs.twimg.com'
            },
            {
                protocol: 'https',
                hostname: 'res-console.cloudinary.com'
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com'
            },
            {
                protocol: 'https',
                hostname: 'replicate.com'
            },
            {
                protocol: 'https',
                hostname:'replicate.delivery'
            }
        ]
    }
};

export default nextConfig;
