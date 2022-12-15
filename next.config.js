/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const nextConfig = (phase) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            reactStrictMode: true,
            env: {
                mongodb_username: 'Tester',
                mongodb_password: "testerpassword",
                mongodb_cluster: "cluster0",
                mongodb_database: 'Blog-Dev',
                mongodb_collection: "contacts"
            }
        };
    }
    return {
        env: {
            mongodb_username: 'Tester',
            mongodb_password: "testerpassword",
            mongodb_cluster: "cluster0",
            mongodb_database: 'Blog',
            mongodb_collection: "contacts"
        }
    };
};

module.exports = nextConfig;
