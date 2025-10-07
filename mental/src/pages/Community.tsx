import { Users, Calendar, Heart, MessageCircle } from 'lucide-react';

export default function Community() {
  const supportGroups = [
    {
      title: 'Anxiety Support Circle',
      description: 'A safe space to share experiences and coping strategies for managing anxiety.',
      members: 45,
      nextMeeting: 'Every Monday, 7:00 PM',
      color: 'from-green-100 to-green-200'
    },
    {
      title: 'Depression Recovery Group',
      description: 'Connect with others on the journey to recovery. Share hope and encouragement.',
      members: 38,
      nextMeeting: 'Every Wednesday, 6:30 PM',
      color: 'from-blue-100 to-blue-200'
    },
    {
      title: 'Working Parents Wellness',
      description: 'Discuss work-life balance, parenting challenges, and self-care strategies.',
      members: 52,
      nextMeeting: 'Every Thursday, 8:00 PM',
      color: 'from-purple-100 to-purple-200'
    },
    {
      title: 'Mindfulness & Meditation',
      description: 'Practice mindfulness together and learn meditation techniques for daily peace.',
      members: 67,
      nextMeeting: 'Every Tuesday, 6:00 PM',
      color: 'from-teal-100 to-teal-200'
    },
    {
      title: 'Grief & Loss Support',
      description: 'A compassionate community for those navigating loss and grief.',
      members: 29,
      nextMeeting: 'Every Friday, 5:30 PM',
      color: 'from-pink-100 to-pink-200'
    },
    {
      title: 'Young Adults Connect',
      description: 'For young adults dealing with life transitions, career stress, and relationships.',
      members: 81,
      nextMeeting: 'Every Sunday, 4:00 PM',
      color: 'from-orange-100 to-orange-200'
    }
  ];

  const stories = [
    {
      quote: 'Finding this community changed my life. I finally felt understood and supported.',
      author: 'Anonymous Member'
    },
    {
      quote: 'The group sessions helped me realize I am not alone in my struggles. Thank you.',
      author: 'Sarah, 32'
    },
    {
      quote: 'Every session brings new insights and reminds me that healing is possible.',
      author: 'Michael, 28'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-gray-800 mb-6">You're Not Alone</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            Join our supportive community where you can share, learn, and heal together.
            Connect with others who understand your journey.
          </p>
          <button className="bg-gradient-to-r from-green-400 to-blue-400 text-white px-8 py-4 rounded-full font-medium text-lg hover:shadow-lg transition-all hover:scale-105">
            Join a Support Group
          </button>
        </div>
      </section>

      {/* Support Groups */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Support Groups</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Find a group that resonates with you. All groups are facilitated by trained professionals.
          </p>

          <div className="grid grid-cols-3 gap-8">
            {supportGroups.map((group) => (
              <div
                key={group.title}
                className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all hover:scale-105 border border-gray-100"
              >
                <div className={`bg-gradient-to-br ${group.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                  <Users className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{group.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{group.description}</p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>{group.members} members</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>{group.nextMeeting}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-green-400 to-blue-400 text-white py-3 rounded-full font-medium hover:shadow-lg transition-all">
                  Join Group
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Stories */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Stories of Hope</h2>
          <p className="text-lg text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Hear from our community members about their journey to healing
          </p>

          <div className="grid grid-cols-3 gap-8">
            {stories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                <MessageCircle className="w-10 h-10 text-green-500 mb-6" />
                <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  "{story.quote}"
                </p>
                <p className="text-gray-600 font-medium">— {story.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-12">
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Community Values</h2>
              <p className="text-gray-700">Creating a safe, supportive space for everyone</p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Respect & Compassion</h3>
                <p className="text-gray-600 text-sm">Treat all members with kindness and understanding</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Confidentiality</h3>
                <p className="text-gray-600 text-sm">What is shared in the group stays in the group</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Active Listening</h3>
                <p className="text-gray-600 text-sm">Listen without judgment and offer support</p>
              </div>
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-semibold text-gray-800 mb-2">Safe Space</h3>
                <p className="text-gray-600 text-sm">Everyone has the right to share at their own pace</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
