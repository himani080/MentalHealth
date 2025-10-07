import { Heart, Shield, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Founder & Clinical Director',
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Clinical psychologist with 15 years of experience in cognitive behavioral therapy.'
    },
    {
      name: 'Dr. James Rodriguez',
      role: 'Head of Therapy Services',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Specializes in trauma-informed care and mindfulness-based interventions.'
    },
    {
      name: 'Emily Chen',
      role: 'Community Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Passionate about building safe spaces for mental health conversations.'
    },
    {
      name: 'Dr. Michael Thompson',
      role: 'Wellness Coordinator',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in holistic approaches to mental wellness and preventive care.'
    }
  ];

  const timeline = [
    { year: '2019', event: 'MindfulCare founded with a vision to make mental health care accessible' },
    { year: '2020', event: 'Launched online therapy platform serving 500+ clients' },
    { year: '2021', event: 'Expanded to community support groups and wellness programs' },
    { year: '2022', event: 'Reached 5,000 therapy sessions and 20+ certified therapists' },
    { year: '2024', event: 'Serving thousands with comprehensive mental health support' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Banner */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-br from-green-100 via-blue-50 to-purple-100">
        <div className="text-center max-w-3xl px-6">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">About MindfulCare</h1>
          <p className="text-2xl text-gray-700 italic leading-relaxed">
            "Healing is not linear, but with the right support, growth is always possible."
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Helping you prioritize your mental health with compassion and privacy. We believe that
              everyone deserves access to quality mental health care, and we are committed to providing
              a safe, supportive environment for your healing journey.
            </p>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Empathy</h3>
              <p className="text-gray-600 leading-relaxed">
                We listen with compassion and understand your unique journey.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-10 h-10 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Your privacy and confidentiality are our highest priorities.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-purple-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Support</h3>
              <p className="text-gray-600 leading-relaxed">
                We create a community where you feel valued and supported.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-orange-100 to-orange-200 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-10 h-10 text-orange-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                We celebrate every step forward on your path to wellness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Meet Our Team</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Dedicated professionals committed to supporting your mental wellness journey
          </p>
          <div className="grid grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl p-6 hover:shadow-xl transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-56 object-cover rounded-2xl mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-300 to-blue-300"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                      <h3 className="text-2xl font-bold text-green-600 mb-2">{item.year}</h3>
                      <p className="text-gray-700 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-green-400 to-blue-400 rounded-full border-4 border-white"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
