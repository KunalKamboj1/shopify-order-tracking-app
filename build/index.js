var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  mode: () => mode,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), isbotModule = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough(), stream = (0, import_node.createReadableStreamFromReadable)(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  loader: () => loader
});
var import_node2 = require("@remix-run/node"), import_react2 = require("@remix-run/react"), import_react3 = require("@shopify/shopify-app-remix/react"), import_server2 = require("@shopify/shopify-app-remix/server"), import_polaris = require("@shopify/polaris"), import_jsx_runtime2 = require("react/jsx-runtime"), loader = async ({ request }) => (await import_server2.authenticate.admin(request), (0, import_node2.json)({ apiKey: process.env.SHOPIFY_API_KEY || "" }));
function App() {
  let { apiKey } = (0, import_react2.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react3.AppProvider, { isEmbeddedApp: !0, apiKey, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_polaris.Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {})
    ] })
  ] });
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node");

// app/components/OrderTracker.tsx
var import_react4 = require("react"), import_polaris2 = require("@shopify/polaris"), import_jsx_runtime3 = require("react/jsx-runtime");
function OrderTracker() {
  let [orderNumber, setOrderNumber] = (0, import_react4.useState)(""), [email, setEmail] = (0, import_react4.useState)(""), [loading, setLoading] = (0, import_react4.useState)(!1), [error, setError] = (0, import_react4.useState)(""), [orderStatus, setOrderStatus] = (0, import_react4.useState)(null), handleSubmit = async () => {
    setLoading(!0), setError("");
    try {
      let response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ orderNumber, email })
      }), data = await response.json();
      if (!response.ok)
        throw new Error(data.message || "Failed to fetch order details");
      setOrderStatus(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(!1);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris2.Page, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris2.Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris2.Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris2.Card, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_polaris2.BlockStack, { gap: "4", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris2.Text, { variant: "headingLg", as: "h2", children: "Track Your Order" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_polaris2.FormLayout, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_polaris2.TextField,
        {
          label: "Order Number",
          value: orderNumber,
          onChange: setOrderNumber,
          autoComplete: "off",
          required: !0
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_polaris2.TextField,
        {
          label: "Email",
          type: "email",
          value: email,
          onChange: setEmail,
          autoComplete: "email",
          required: !0
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris2.Button, { primary: !0, onClick: handleSubmit, loading, children: "Track Order" })
    ] }),
    error && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris2.Banner, { status: "critical", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: error }) }),
    orderStatus && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_polaris2.BlockStack, { gap: "4", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris2.Text, { variant: "headingMd", children: "Order Status" }),
      orderStatus.fulfillment_status === "FULFILLED" ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_polaris2.BlockStack, { gap: "2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris2.Banner, { status: "success", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Your order has been shipped!" }) }),
        orderStatus.tracking_number && /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_polaris2.Text, { children: [
          "Tracking Number: ",
          orderStatus.tracking_number
        ] }),
        orderStatus.tracking_url && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris2.Link, { url: orderStatus.tracking_url, external: !0, children: "Track Package" })
      ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_polaris2.Banner, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("p", { children: "Your order is being processed and hasn't been shipped yet." }) })
    ] })
  ] }) }) }) }) });
}

// app/routes/_index.tsx
var import_jsx_runtime4 = require("react/jsx-runtime"), loader2 = async ({ request }) => (0, import_node3.json)({});
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(OrderTracker, {});
}

// app/routes/app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => App2,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_react6 = require("@shopify/shopify-app-remix/react"), import_server3 = require("@shopify/shopify-app-remix/server"), import_polaris3 = require("@shopify/polaris"), import_jsx_runtime5 = require("react/jsx-runtime"), loader3 = async ({ request }) => (await import_server3.authenticate.admin(request), (0, import_node4.json)({ apiKey: process.env.SHOPIFY_API_KEY || "" }));
function App2() {
  let { apiKey } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("meta", { name: "viewport", content: "width=device-width,initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react6.AppProvider, { isEmbeddedApp: !0, apiKey, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_polaris3.Frame, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Outlet, {}) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react5.Scripts, {})
    ] })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-L6VQCLQT.js", imports: ["/build/_shared/chunk-6NMBHPI4.js", "/build/_shared/chunk-G3AUNIWY.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BQQVQ2AD.js", imports: ["/build/_shared/chunk-EFRTZQH6.js", "/build/_shared/chunk-OBODZUPL.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-34YTAHRM.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-424M5JO2.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "07a48a6d", hmr: void 0, url: "/build/manifest-07A48A6D.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public\\build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
});
