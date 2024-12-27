// src/services/orderService.ts
import { OrderDetails } from '@/types';

export const orderService = {
  async processOrder(orderDetails: OrderDetails) {
    try {
      // Send email to store owner
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      // Save order details to database
      await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      return { success: true };
    } catch (error) {
      console.error('Error processing order:', error);
      return { success: false, error };
    }
  },
};