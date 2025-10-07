import { Video, Brain, Frown, Heart, Users, Sparkles } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Video,
      title: 'Online Therapy',
      description: 'Professional therapy sessions from the comfort of your home. Flexible scheduling with experienced therapists who care about your progress.',
      color: 'from-green-100 to-green-200',
      iconColor: 'text-green-700'
    },
    {
      icon: Brain,
      title: 'Stress & Anxiety Management',
      description: 'Learn effective techniques to manage daily stress and anxiety. Build resilience and develop coping strategies for a calmer life.',
      color: 'from-blue-100 to-blue-200',
      iconColor: 'text-blue-700'
    },
    {
      icon: Frown,
      title: 'Depression Counselling',
      description: 'Compassionate support for those experiencing depression. Evidence-based approaches to help you find hope and healing.',
      color: 'from-purple-100 to-purple-200',
      iconColor: 'text-purple-700'
    },
    {
      icon: Sparkles,
      title: 'Mindfulness & Meditation',
      description: 'Guided meditation and mindfulness practices to enhance emotional well-being. Cultivate inner peace and present-moment awareness.',
      color: 'from-teal-100 to-teal-200',
      iconColor: 'text-teal-700'
    },
    {
      icon: Heart,
      title: 'Relationship Therapy',
      description: 'Strengthen your relationships through couples and family therapy. Improve communication and build deeper connections.',
      color: 'from-pink-100 to-pink-200',
      iconColor: 'text-pink-700'
    },
    {
      icon: Users,
      title: 'Group Therapy',
      description: 'Connect with others in a supportive group setting. Share experiences and learn from peers facing similar challenges.',
      color: 'from-orange-100 to-orange-200',
      iconColor: 'text-orange-700'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Services</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're here to guide you every step of the way. Choose from our range of
            specialized services designed to support your unique mental health journey.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.title}
                  className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all hover:scale-105 border border-gray-100"
                >
                  <div className={`bg-gradient-to-br ${service.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                  <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all hover:scale-105 w-full">
                    Book Now
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Choose Our Services?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-400 w-6 h-6 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Licensed Professionals</h3>
                    <p className="text-gray-600">All our therapists are certified and experienced in their specialties.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-400 w-6 h-6 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Flexible Scheduling</h3>
                    <p className="text-gray-600">Book sessions that fit your lifestyle with evening and weekend options.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-purple-400 w-6 h-6 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Complete Privacy</h3>
                    <p className="text-gray-600">Your sessions are confidential and conducted in a secure environment.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-teal-400 w-6 h-6 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Evidence-Based Approaches</h3>
                    <p className="text-gray-600">We use proven therapeutic methods backed by research.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-blue-200 rounded-3xl blur-3xl opacity-30"></div>
              <img
                src="https://images.pexels.com/photos/6303715/pexels-photo-6303715.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Therapy session"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
