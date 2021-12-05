// const withPlugins = require("next-compose-plugins");

// module.exports = withPlugins([], {});

import { securityHeaders } from "./utils/securityHeaders";

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
