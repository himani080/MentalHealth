import { Heart, Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'services' | 'therapists' | 'community' | 'blog' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-green-400 to-blue-400 p-2 rounded-full">
                <Heart className="w-5 h-5 text-white" fill="white" />
              </div>
              <span className="text-lg font-semibold text-gray-800">MindfulCare</span>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Supporting your mental wellness journey with compassion and care.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['about', 'services', 'therapists', 'community'].map((page) => (
                <li key={page}>
                  <button
                    onClick={() => onNavigate(page as Page)}
                    className="text-sm text-gray-600 hover:text-green-600 transition-colors capitalize"
                  >
                    {page}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><button onClick={() => onNavigate('blog')} className="text-sm text-gray-600 hover:text-green-600 transition-colors">Blog</button></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-green-600 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 mb-3">Get wellness tips delivered to your inbox</p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="px-4 py-2 rounded-full border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-shadow"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center justify-between pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            © 2024 MindfulCare. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
