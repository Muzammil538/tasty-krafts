// src/pages/about.tsx

import Header from "@/components/Header";
export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 pt-20">
        <h1 className="text-4xl font-bold mb-8">About Tasty Krafts</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 mb-6">
              Welcome to Tasty Krafts, where passion meets flavor. Our journey began
              with a simple mission: to deliver exceptional food experiences right to
              your doorstep.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2024, Tasty Krafts has grown from a small family kitchen
              to a beloved local establishment. We take pride in using fresh,
              locally-sourced ingredients and creating dishes that bring joy to our
              customers.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Quality ingredients, no compromises</li>
              <li>Customer satisfaction is our top priority</li>
              <li>Supporting local suppliers</li>
              <li>Sustainable practices</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}