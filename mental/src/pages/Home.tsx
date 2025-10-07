import { Heart, Users, BookOpen, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'about' | 'services' | 'therapists' | 'community' | 'blog' | 'contact';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'MindfulCare helped me find the support I needed during a difficult time. The therapists are compassionate and understanding.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      name: 'Michael Chen',
      text: 'The online therapy sessions fit perfectly into my schedule. I finally feel like I am taking control of my mental health.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    },
    {
      name: 'Emily Rodriguez',
      text: 'The community support groups made me realize I am not alone. Thank you for creating such a safe space.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Your Mental Wellness Matters
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Find therapy, resources, and support made for you.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-8 py-4 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105"
                >
                  Get Support
                </button>
                <button
                  onClick={() => onNavigate('therapists')}
                  className="bg-white text-gray-800 px-8 py-4 rounded-full font-medium border-2 border-gray-200 hover:border-green-400 transition-all hover:shadow-md"
                >
                  Find a Therapist
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-blue-200 rounded-3xl blur-3xl opacity-30"></div>
              <img
                src="https://images.pexels.com/photos/3808904/pexels-photo-3808904.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Mental wellness"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We believe everyone deserves access to compassionate mental health care.
            Our platform connects you with qualified therapists, provides valuable resources,
            and builds a supportive community where healing begins.
          </p>
        </div>
      </section>

      {/* Main Offerings */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">How We Can Help</h2>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">One-on-One Counselling</h3>
              <p className="text-gray-600 leading-relaxed">
                Personal therapy sessions tailored to your unique needs and goals.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Mindfulness Programs</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn meditation and mindfulness techniques for daily peace.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Support Groups</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with others who understand your journey and experiences.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-3xl hover:shadow-xl transition-all hover:scale-105">
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Self-Care Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Access articles, guides, and tools to support your wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">What Our Community Says</h2>
          <div className="relative bg-white rounded-3xl shadow-xl p-12">
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                className="w-20 h-20 rounded-full object-cover mb-6"
              />
              <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-gray-800 font-semibold">{testimonials[currentTestimonial].name}</p>
            </div>

            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentTestimonial ? 'bg-green-600 w-8' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
