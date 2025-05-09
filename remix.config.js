/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  server: "./server.js",
  assetsBuildDirectory: "public/build",
  serverDependenciesToBundle: [
    "@shopify/shopify-app-remix",
    "@shopify/polaris"
  ]
}; 