/** @type {import('next').NextConfig} */
const nextConfig = {
    rewrites: async () => {
        const prod = [{
            source: "/documentations",
            destination: "/documentations/index.html",
        }]

        const dev = {
            fallback: [
                {
                    source: '/:path*',
                    destination: `http://localhost:3001/:path*`,
                },
            ],
        }

        return process.env.DEV ? dev : prod
    },
};

export default nextConfig;
