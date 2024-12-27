// src/pages/menu/index.tsx
import { useState } from 'react';
import { FoodItem, FoodCategory } from '@/types';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import MenuFilter from '@/components/MenuFilter';
import FoodCard from '@/components/FoodCard';

export default function Menu() {
  const router = useRouter();
  const [category, setCategory] = useState<FoodCategory | 'all'>('all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, Infinity]);

  const [menuItems] = useState<FoodItem[]>([
    {
      id: '1',
      name: 'Crispy Fried Chicken',
      description: 'Perfectly seasoned crispy fried chicken',
      price: 12.99,
      image: '/images/fried-chicken.jpg',
      category: 'fried',
      featured: true
    },
    // Add more menu items here
  ]);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = category === 'all' || item.category === category;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <MenuFilter 
              onCategoryChange={setCategory}
              onPriceRangeChange={setPriceRange}
            />
          </div>
          
          <div className="md:col-span-3">
            <h1 className="text-3xl font-bold mb-6">Our Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <FoodCard 
                  key={item.id} 
                  food={item} 
                  onClick={() => router.push(`/menu/${item.id}`)}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}