// src/components/OrderForm.tsx
import { useState } from 'react';
import  { OrderDetails, CartItem }  from '@/types';




interface OrderFormProps {
  onSubmit: (orderDetails: OrderDetails) => void;
  cartItems: CartItem[];
  totalAmount: number;
}

const OrderForm = ({ onSubmit, cartItems, totalAmount }: OrderFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      items: cartItems,
      totalAmount,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          type="text"
          required
          className="w-full p-2 border rounded-md"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Mobile Number</label>
        <input
          type="tel"
          required
          className="w-full p-2 border rounded-md"
          value={formData.mobile}
          onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          required
          className="w-full p-2 border rounded-md"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-2 rounded-md hover:bg-orange-700 transition-colors"
      >
        Place Order
      </button>
    </form>
  );
};

export default OrderForm;