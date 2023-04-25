/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
  serverRuntimeConfig: {
    connectionString: "mongodb+srv://phongnv976:pU8wzkP3YkshHw91@cluster0.8mwu3i6.mongodb.net/?retryWrites=true&w=majority",
    secret:
      "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
  webpack: (config) => {
    config.experiments = config.experiments || {};
    config.experiments.topLevelAwait = true;
    return config;
  }
};

module.exports = nextConfig;
