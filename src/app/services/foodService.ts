// src/services/foodService.ts

import { FoodItem, mockFoodItems } from '@/types';

export const foodService = {
  // Function to get all food items
  async getAllFoodItems(): Promise<FoodItem[]> {
    // In a real application, this would fetch data from an API or database
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockFoodItems);
      }, 1000); // Simulating network delay
    });
  },

  // Function to get featured food items
  async getFeaturedItems(): Promise<FoodItem[]> {
    // In a real application, this would filter items based on a 'featured' flag
    return new Promise((resolve) => {
      setTimeout(() => {
        const featuredItems = mockFoodItems.filter(item => item.featured);
        resolve(featuredItems);
      }, 1000); // Simulating network delay
    });
  },

  // Function to get a food item by ID
  async getFoodItemById(id: string): Promise<FoodItem | undefined> {
    return new Promise((resolve) => {
      setTimeout(() => {
        const item = mockFoodItems.find(food => food.id === id);
        resolve(item);
      }, 1000); // Simulating network delay
    });
  }
};