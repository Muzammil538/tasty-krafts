// src/types/index.ts
export interface FoodItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: FoodCategory;
  featured: boolean;
}

export type FoodCategory = 'fried' | 'dessert' | 'veg' | 'non-veg' | 'drinks';

export interface OrderDetails {
  fullName: string;
  mobile: string;
  email: string;
  items: CartItem[];
  totalAmount: number;
}

export interface CartItem {
  foodItem: FoodItem;
  quantity: number;
}

// Mock Data
export const mockFoodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Crispy Fried Chicken',
    description: 'Perfectly seasoned crispy fried chicken that melts in your mouth',
    price: 12.99,
    image: '/images/foods/fried-chicken.jpg',
    category: 'fried',
    featured: true
  },
  {
    id: '2',
    name: 'Chocolate Brownie',
    description: 'Rich chocolate brownie served with vanilla ice cream',
    price: 6.99,
    image: '/images/foods/brownie.jpg',
    category: 'dessert',
    featured: true
  },
  {
    id: '3',
    name: 'Vegetable Stir Fry',
    description: 'Fresh vegetables stir-fried in aromatic sauce',
    price: 10.99,
    image: '/images/foods/stir-fry.jpg',
    category: 'veg',
    featured: false
  }
];