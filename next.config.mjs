/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cover.komiku.id',
            },
        ],
    },
};

export default nextConfig;
