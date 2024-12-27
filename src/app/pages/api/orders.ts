// src/pages/api/orders.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { OrderDetails } from '@/types';

// In a real application, you would use a database
// eslint-disable-next-line prefer-const
let orders: OrderDetails[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const orderDetails: OrderDetails = req.body;
    orders.push(orderDetails);
    res.status(201).json({ message: 'Order created successfully' });
  } else if (req.method === 'GET') {
    res.status(200).json(orders);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}