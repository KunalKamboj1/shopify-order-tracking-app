import React from "react";
import { Page, Card, Text } from "@shopify/polaris";

export default function Settings() {
  return (
    <Page title="App Settings">
      <Card>
        <Text variant="headingMd" as="h2">Settings</Text>
        <Text as="p">This is where you can configure your app settings.</Text>
      </Card>
    </Page>
  );
} 