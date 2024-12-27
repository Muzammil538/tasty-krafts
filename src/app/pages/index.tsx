// src/pages/index.tsx

import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import FoodCard from '@/components/FoodCard';
import { foodService } from '@/services/foodService';
import { FoodItem } from '@/types';

export default function Home() {
  const [featuredItems, setFeaturedItems] = useState<FoodItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeaturedItems = async () => {
      try {
        const items = await foodService.getFeaturedItems();
        setFeaturedItems(items);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to fetch featured items');
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedItems();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="container mx-auto px-4 pt-20">
        <section className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Tasty Krafts</h1>
          <p className="text-lg text-gray-600">
            Discover delicious meals prepared with love and care.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Featured Items</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredItems.map((item) => (
                <FoodCard key={item.id} food={item} onClick={() => {}} />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}