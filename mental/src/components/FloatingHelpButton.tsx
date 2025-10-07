import { MessageCircle } from 'lucide-react';

export default function FloatingHelpButton() {
  return (
    <button className="fixed bottom-8 right-8 bg-gradient-to-r from-green-400 to-blue-400 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 group z-40">
      <MessageCircle className="w-6 h-6" />
      <span className="absolute right-full mr-3 bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Talk to a Therapist
      </span>
    </button>
  );
}
