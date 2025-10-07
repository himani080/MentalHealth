import { Search, Filter, Star, Calendar, Award } from 'lucide-react';
import { useState } from 'react';

export default function Therapists() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('all');
  const [selectedTherapist, setSelectedTherapist] = useState<number | null>(null);

  const therapists = [
    {
      id: 1,
      name: 'Dr. Emily Watson',
      specialty: 'Anxiety & Depression',
      experience: '12 years',
      languages: 'English, Spanish',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Specializes in cognitive behavioral therapy with a compassionate, client-centered approach. Experienced in treating anxiety disorders, depression, and life transitions.',
      approach: 'I believe in creating a safe, non-judgmental space where you can explore your thoughts and feelings. Together, we will develop practical strategies for lasting change.',
      availability: 'Monday-Friday, 9am-6pm'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Trauma & PTSD',
      experience: '15 years',
      languages: 'English, Mandarin',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Expert in trauma-informed care and EMDR therapy. Helps clients heal from traumatic experiences and develop resilience.',
      approach: 'Using evidence-based trauma therapies, I guide clients through healing at their own pace, with compassion and respect for their journey.',
      availability: 'Tuesday-Saturday, 10am-7pm'
    },
    {
      id: 3,
      name: 'Sarah Rodriguez',
      specialty: 'Relationships & Family',
      experience: '10 years',
      languages: 'English, Spanish, Portuguese',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Specializes in couples therapy and family dynamics. Helps improve communication and strengthen relationships.',
      approach: 'I work collaboratively with couples and families to identify patterns, improve communication, and build stronger connections.',
      availability: 'Monday, Wednesday, Friday, 2pm-9pm'
    },
    {
      id: 4,
      name: 'Dr. James Thompson',
      specialty: 'Stress Management',
      experience: '8 years',
      languages: 'English, French',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Focuses on mindfulness-based stress reduction and work-life balance. Helps high-performing individuals manage stress effectively.',
      approach: 'I teach practical mindfulness techniques and stress management strategies that integrate seamlessly into your daily life.',
      availability: 'Monday-Thursday, 8am-5pm'
    },
    {
      id: 5,
      name: 'Dr. Lisa Park',
      specialty: 'Anxiety & Depression',
      experience: '14 years',
      languages: 'English, Korean',
      rating: 5.0,
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Experienced in treating anxiety disorders, depression, and OCD using CBT and exposure therapy.',
      approach: 'My approach is warm and collaborative, focusing on building skills to manage symptoms and improve quality of life.',
      availability: 'Tuesday-Friday, 11am-8pm'
    },
    {
      id: 6,
      name: 'Robert Martinez',
      specialty: 'Addiction & Recovery',
      experience: '11 years',
      languages: 'English, Spanish',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Specializes in addiction counseling and recovery support. Helps clients build sustainable recovery plans.',
      approach: 'I provide compassionate, non-judgmental support while helping you develop the tools needed for lasting recovery.',
      availability: 'Monday-Saturday, 9am-6pm'
    }
  ];

  const specialties = ['all', 'Anxiety & Depression', 'Trauma & PTSD', 'Relationships & Family', 'Stress Management', 'Addiction & Recovery'];

  const filteredTherapists = therapists.filter(therapist => {
    const matchesSearch = therapist.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         therapist.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty = selectedSpecialty === 'all' || therapist.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  if (selectedTherapist !== null) {
    const therapist = therapists.find(t => t.id === selectedTherapist);
    if (!therapist) return null;

    return (
      <div className="pt-20 min-h-screen">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <button
            onClick={() => setSelectedTherapist(null)}
            className="text-green-600 hover:text-green-700 font-medium mb-8"
          >
            ← Back to all therapists
          </button>

          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="flex gap-8 mb-8">
              <img
                src={therapist.image}
                alt={therapist.name}
                className="w-48 h-48 rounded-3xl object-cover"
              />
              <div className="flex-1">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">{therapist.name}</h1>
                <p className="text-xl text-green-600 font-medium mb-4">{therapist.specialty}</p>
                <div className="flex items-center gap-6 text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span>{therapist.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span>{therapist.rating} rating</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">
                  <strong>Languages:</strong> {therapist.languages}
                </p>
                <p className="text-gray-600">
                  <strong>Availability:</strong> {therapist.availability}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">About</h2>
                <p className="text-gray-700 leading-relaxed">{therapist.bio}</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">My Approach</h2>
                <p className="text-gray-700 leading-relaxed">{therapist.approach}</p>
              </div>

              <div className="pt-6">
                <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg transition-all hover:scale-105 w-full flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Book a Session
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Find Your Therapist</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Connect with experienced, compassionate therapists who understand your needs
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="pl-12 pr-8 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 bg-white"
              >
                {specialties.map(specialty => (
                  <option key={specialty} value={specialty}>
                    {specialty === 'all' ? 'All Specialties' : specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Therapist Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {filteredTherapists.map((therapist) => (
              <div
                key={therapist.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105"
              >
                <img
                  src={therapist.image}
                  alt={therapist.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{therapist.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{therapist.specialty}</p>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span>{therapist.experience} exp.</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{therapist.rating}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedTherapist(therapist.id)}
                    className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all"
                  >
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
