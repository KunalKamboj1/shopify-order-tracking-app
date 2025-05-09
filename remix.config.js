/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverModuleFormat: "cjs",
  serverBuildTarget: "node-cjs",
  serverBuildPath: "build/index.js",
  assetsBuildDirectory: "public/build",
  serverDependenciesToBundle: [
    "@shopify/shopify-app-remix",
    "@shopify/polaris"
  ]
}; 