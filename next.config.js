// const withPlugins = require("next-compose-plugins");

// module.exports = withPlugins([], {});

const securityHeaders = [
    {
        key: "X-DNS-Prefetch-Control",
        value: "on",
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    {
        key: "Server",
        value: "Apache", // phony server value
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    {
        key: "X-Frame-Options",
        value: "sameorigin",
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block",
    },
    {
        key: "Referrer-Policy",
        value: "same-origin",
    },
    {
        key: "Permissions-Policy",
        value: "geolocation=*", // allow specified policies here
    },
];

module.exports = {
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
};
