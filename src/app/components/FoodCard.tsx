// src/components/FoodCard.tsx
import Image from 'next/image';
import { FoodItem } from '@/types';

interface FoodCardProps {
  food: FoodItem;
  onClick: () => void;
}

const FoodCard = ({ food, onClick }: FoodCardProps) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onClick}
    >
      <div className="relative h-48">
        <Image
          src={food.image}
          alt={food.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{food.name}</h3>
        <p className="text-gray-600 mb-2 line-clamp-2">{food.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-orange-600 font-bold">${food.price}</span>
          <span className="text-sm text-gray-500 capitalize">{food.category}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;