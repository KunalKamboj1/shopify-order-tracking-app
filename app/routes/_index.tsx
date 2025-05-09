import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { OrderTracker } from "../components/OrderTracker";

export const loader = async ({ request }) => {
  return json({});
};

export default function Index() {
  return <OrderTracker />;
} 