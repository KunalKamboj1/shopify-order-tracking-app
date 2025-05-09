import {
  Banner,
  BlockStack,
  Button,
  Card,
  FormLayout,
  Layout,
  Link,
  Page,
  Text,
  TextField,
  init_esm,
  require_node
} from "/build/_shared/chunk-XBE5HIWP.js";
import {
  createHotContext,
  init_remix_hmr
} from "/build/_shared/chunk-NCFMFYM6.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XU7DNSPJ.js";
import "/build/_shared/chunk-GIAAE3CH.js";
import {
  require_react
} from "/build/_shared/chunk-BOXFZXVX.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
init_remix_hmr();
var import_node = __toESM(require_node());

// app/components/OrderTracker.tsx
init_remix_hmr();
var import_react = __toESM(require_react());
init_esm();
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\components\\\\OrderTracker.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
var _s = $RefreshSig$();
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\components\\OrderTracker.tsx"
  );
  import.meta.hot.lastModified = "1746784670139.8171";
}
function OrderTracker() {
  _s();
  const [orderNumber, setOrderNumber] = (0, import_react.useState)("");
  const [email, setEmail] = (0, import_react.useState)("");
  const [loading, setLoading] = (0, import_react.useState)(false);
  const [error, setError] = (0, import_react.useState)("");
  const [orderStatus, setOrderStatus] = (0, import_react.useState)(null);
  const handleSubmit = async () => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          orderNumber,
          email
        })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Failed to fetch order details");
      }
      setOrderStatus(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Page, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Layout.Section, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Card, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingLg", as: "h2", children: "Track Your Order" }, void 0, false, {
      fileName: "app/components/OrderTracker.tsx",
      lineNumber: 61,
      columnNumber: 15
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(FormLayout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Order Number", value: orderNumber, onChange: setOrderNumber, autoComplete: "off", required: true }, void 0, false, {
        fileName: "app/components/OrderTracker.tsx",
        lineNumber: 64,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(TextField, { label: "Email", type: "email", value: email, onChange: setEmail, autoComplete: "email", required: true }, void 0, false, {
        fileName: "app/components/OrderTracker.tsx",
        lineNumber: 66,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Button, { primary: true, onClick: handleSubmit, loading, children: "Track Order" }, void 0, false, {
        fileName: "app/components/OrderTracker.tsx",
        lineNumber: 68,
        columnNumber: 17
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/OrderTracker.tsx",
      lineNumber: 63,
      columnNumber: 15
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Banner, { status: "critical", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: error }, void 0, false, {
      fileName: "app/components/OrderTracker.tsx",
      lineNumber: 74,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/components/OrderTracker.tsx",
      lineNumber: 73,
      columnNumber: 25
    }, this),
    orderStatus && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { variant: "headingMd", children: "Order Status" }, void 0, false, {
        fileName: "app/components/OrderTracker.tsx",
        lineNumber: 78,
        columnNumber: 19
      }, this),
      orderStatus.fulfillment_status === "FULFILLED" ? /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(BlockStack, { gap: "2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Banner, { status: "success", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Your order has been shipped!" }, void 0, false, {
          fileName: "app/components/OrderTracker.tsx",
          lineNumber: 81,
          columnNumber: 25
        }, this) }, void 0, false, {
          fileName: "app/components/OrderTracker.tsx",
          lineNumber: 80,
          columnNumber: 23
        }, this),
        orderStatus.tracking_number && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Text, { children: [
          "Tracking Number: ",
          orderStatus.tracking_number
        ] }, void 0, true, {
          fileName: "app/components/OrderTracker.tsx",
          lineNumber: 83,
          columnNumber: 55
        }, this),
        orderStatus.tracking_url && /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { url: orderStatus.tracking_url, external: true, children: "Track Package" }, void 0, false, {
          fileName: "app/components/OrderTracker.tsx",
          lineNumber: 84,
          columnNumber: 52
        }, this)
      ] }, void 0, true, {
        fileName: "app/components/OrderTracker.tsx",
        lineNumber: 79,
        columnNumber: 69
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Banner, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", { children: "Your order is being processed and hasn't been shipped yet." }, void 0, false, {
        fileName: "app/components/OrderTracker.tsx",
        lineNumber: 88,
        columnNumber: 23
      }, this) }, void 0, false, {
        fileName: "app/components/OrderTracker.tsx",
        lineNumber: 87,
        columnNumber: 37
      }, this)
    ] }, void 0, true, {
      fileName: "app/components/OrderTracker.tsx",
      lineNumber: 77,
      columnNumber: 31
    }, this)
  ] }, void 0, true, {
    fileName: "app/components/OrderTracker.tsx",
    lineNumber: 60,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/components/OrderTracker.tsx",
    lineNumber: 59,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/components/OrderTracker.tsx",
    lineNumber: 58,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/components/OrderTracker.tsx",
    lineNumber: 57,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/components/OrderTracker.tsx",
    lineNumber: 56,
    columnNumber: 10
  }, this);
}
_s(OrderTracker, "4xL3Fbur7s0k6kDEHL2QbJqw7iA=");
_c = OrderTracker;
var _c;
$RefreshReg$(_c, "OrderTracker");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

// app/routes/_index.tsx
var import_jsx_dev_runtime2 = __toESM(require_jsx_dev_runtime());
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app\\\\routes\\\\_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app\\routes\\_index.tsx"
  );
  import.meta.hot.lastModified = "1746784666534.5474";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(OrderTracker, {}, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 29,
    columnNumber: 10
  }, this);
}
_c2 = Index;
var _c2;
$RefreshReg$(_c2, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-Y7Y6UDCL.js.map
