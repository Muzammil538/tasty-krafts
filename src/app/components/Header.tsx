// src/components/Header.tsx
import Link from 'next/link';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-orange-600">
            Tasty Krafts
          </Link>
          <div className="space-x-6">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <Link href="/menu" className="hover:text-orange-600 transition-colors">
              Menu
            </Link>
            <Link href="/about" className="hover:text-orange-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-orange-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
