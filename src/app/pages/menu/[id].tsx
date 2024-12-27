// src/pages/menu/[id].tsx
import { useRouter } from 'next/router';
import { useState } from 'react';
import Image from 'next/image';
import { FoodItem } from '@/types';
import Header from '@/components/Header';
import FoodCard from '@/components/FoodCard';


export default function MenuItemDetail() {
  const router = useRouter();
  // const { id } = router.query;

  const [item] = useState<FoodItem>({
    id: '1',
    name: 'Crispy Fried Chicken',
    description: 'Perfectly seasoned crispy fried chicken',
    price: 12.99,
    image: '/images/fried-chicken.jpg',
    category: 'fried',
    featured: true
  });

  const [relatedItems] = useState<FoodItem[]>([
    // Add related items here
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pt-20">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-96">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            
            <div>
              <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <p className="text-2xl font-bold text-orange-600 mb-6">
                ${item.price}
              </p>
              <button
                className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors"
                onClick={() => {/* Add to cart logic */}}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Items</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedItems.map((item) => (
              <FoodCard 
                key={item.id} 
                food={item}
                onClick={() => router.push(`/menu/${item.id}`)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}