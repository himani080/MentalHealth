import { Heart } from 'lucide-react';

type Page = 'home' | 'about' | 'services' | 'therapists' | 'community' | 'blog' | 'contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const navLinks: { name: string; page: Page }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Therapists', page: 'therapists' },
    { name: 'Community', page: 'community' },
    { name: 'Blog', page: 'blog' },
    { name: 'Contact', page: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 group"
          >
            <div className="bg-gradient-to-br from-green-400 to-blue-400 p-2 rounded-full group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <span className="text-xl font-semibold text-gray-800">MindfulCare</span>
          </button>

          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? 'text-green-600'
                    : 'text-gray-600 hover:text-green-500'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
