import React, { useState } from 'react';
import {
  Card,
  Layout,
  Page,
  FormLayout,
  TextField,
  Button,
  Banner,
  Text,
  BlockStack,
  Link
} from '@shopify/polaris';

export function OrderTracker() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [orderStatus, setOrderStatus] = useState<{
    fulfillment_status: string;
    tracking_number?: string;
    tracking_url?: string;
  } | null>(null);

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderNumber, email }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch order details');
      }

      setOrderStatus(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="4">
              <Text variant="headingLg" as="h2">Track Your Order</Text>
              
              <FormLayout>
                <TextField
                  label="Order Number"
                  value={orderNumber}
                  onChange={setOrderNumber}
                  autoComplete="off"
                  required
                />
                
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  autoComplete="email"
                  required
                />

                <Button primary onClick={handleSubmit} loading={loading}>
                  Track Order
                </Button>
              </FormLayout>

              {error && (
                <Banner status="critical">
                  <p>{error}</p>
                </Banner>
              )}

              {orderStatus && (
                <BlockStack gap="4">
                  <Text variant="headingMd">Order Status</Text>
                  {orderStatus.fulfillment_status === 'FULFILLED' ? (
                    <BlockStack gap="2">
                      <Banner status="success">
                        <p>Your order has been shipped!</p>
                      </Banner>
                      {orderStatus.tracking_number && (
                        <Text>Tracking Number: {orderStatus.tracking_number}</Text>
                      )}
                      {orderStatus.tracking_url && (
                        <Link url={orderStatus.tracking_url} external>
                          Track Package
                        </Link>
                      )}
                    </BlockStack>
                  ) : (
                    <Banner>
                      <p>Your order is being processed and hasn't been shipped yet.</p>
                    </Banner>
                  )}
                </BlockStack>
              )}
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
} 