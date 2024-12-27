
// src/components/MenuFilter.tsx
import { FoodCategory } from '@/types';

interface MenuFilterProps {
  onCategoryChange: (category: FoodCategory | 'all') => void;
  onPriceRangeChange: (range: [number, number]) => void;
}

const MenuFilter = ({ onCategoryChange, onPriceRangeChange }: MenuFilterProps) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Category</label>
        <select 
          onChange={(e) => onCategoryChange(e.target.value as FoodCategory | 'all')}
          className="w-full p-2 border rounded-md"
        >
          <option value="all">All</option>
          <option value="fried">Fried</option>
          <option value="dessert">Dessert</option>
          <option value="veg">Vegetarian</option>
          <option value="non-veg">Non-Vegetarian</option>
          <option value="drinks">Drinks</option>
        </select>
      </div>
      
      <div>
        <label className="block text-sm font-medium mb-2">Price Range</label>
        <div className="flex gap-2">
          <input 
            type="number" 
            placeholder="Min"
            className="w-1/2 p-2 border rounded-md"
            onChange={(e) => onPriceRangeChange([Number(e.target.value), Infinity])}
          />
          <input 
            type="number" 
            placeholder="Max"
            className="w-1/2 p-2 border rounded-md"
            onChange={(e) => onPriceRangeChange([0, Number(e.target.value)])}
          />
        </div>
      </div>
    </div>
  );
};

export default MenuFilter;