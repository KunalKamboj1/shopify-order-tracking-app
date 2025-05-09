import { json } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { authenticate } from "@shopify/shopify-app-remix/server";
import { Frame } from "@shopify/polaris";

export const loader = async ({ request }) => {
  await authenticate.admin(request);
  return json({ apiKey: process.env.SHOPIFY_API_KEY || "" });
};

export default function App() {
  const { apiKey } = useLoaderData<typeof loader>();

  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <AppProvider isEmbeddedApp apiKey={apiKey}>
          <Frame>
            <Outlet />
          </Frame>
        </AppProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
} 