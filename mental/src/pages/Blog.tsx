import { Clock, User, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const categories = ['all', 'Self-care', 'Anxiety', 'Productivity', 'Mindfulness', 'Relationships'];

  const posts = [
    {
      id: 1,
      title: '5 Daily Habits for Better Mental Health',
      category: 'Self-care',
      author: 'Dr. Sarah Mitchell',
      date: 'March 15, 2024',
      readTime: '5 min read',
      image: 'https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Discover simple yet powerful daily practices that can transform your mental wellness journey.',
      content: 'Building better mental health starts with small, consistent daily habits. Here are five practices that can make a significant difference...'
    },
    {
      id: 2,
      title: 'Understanding and Managing Anxiety',
      category: 'Anxiety',
      author: 'Dr. Michael Chen',
      date: 'March 12, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Learn practical strategies to cope with anxiety and regain control of your thoughts.',
      content: 'Anxiety is a natural response to stress, but when it becomes overwhelming, it can impact your daily life. Understanding the root causes...'
    },
    {
      id: 3,
      title: 'The Power of Mindfulness in Everyday Life',
      category: 'Mindfulness',
      author: 'Emily Chen',
      date: 'March 10, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3759660/pexels-photo-3759660.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'How practicing mindfulness can reduce stress and improve your overall well-being.',
      content: 'Mindfulness is more than a buzzword—it is a powerful tool for managing stress and enhancing your quality of life...'
    },
    {
      id: 4,
      title: 'Boosting Productivity Without Burnout',
      category: 'Productivity',
      author: 'Dr. James Thompson',
      date: 'March 8, 2024',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Find the balance between being productive and maintaining your mental health.',
      content: 'In our fast-paced world, productivity is often prioritized over well-being. Here is how to achieve both...'
    },
    {
      id: 5,
      title: 'Building Stronger Relationships',
      category: 'Relationships',
      author: 'Sarah Rodriguez',
      date: 'March 5, 2024',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/3727459/pexels-photo-3727459.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Communication techniques that can deepen connections with your loved ones.',
      content: 'Healthy relationships require effort, understanding, and effective communication. Let is explore key strategies...'
    },
    {
      id: 6,
      title: 'The Science of Sleep and Mental Health',
      category: 'Self-care',
      author: 'Dr. Lisa Park',
      date: 'March 1, 2024',
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg?auto=compress&cs=tinysrgb&w=800',
      excerpt: 'Understanding the crucial connection between quality sleep and mental wellness.',
      content: 'Sleep is not just rest—it is essential for mental health. Research shows a strong link between sleep quality and emotional well-being...'
    }
  ];

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  if (selectedPost !== null) {
    const post = posts.find(p => p.id === selectedPost);
    if (!post) return null;

    return (
      <div className="pt-20 min-h-screen">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <button
            onClick={() => setSelectedPost(null)}
            className="text-green-600 hover:text-green-700 font-medium mb-8"
          >
            ← Back to all posts
          </button>

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-96 object-cover rounded-3xl mb-8"
          />

          <div className="bg-white rounded-3xl shadow-xl p-12">
            <div className="mb-6">
              <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-6">{post.title}</h1>

            <div className="flex items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime}</span>
              </div>
              <span>{post.date}</span>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {post.content}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-8">Key Takeaways</h2>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>Practice mindfulness and self-awareness daily</li>
                <li>Build healthy routines that support your well-being</li>
                <li>Seek support when needed—you don't have to do it alone</li>
                <li>Be patient with yourself throughout your journey</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                Remember, taking care of your mental health is a continuous journey, not a destination. Every small step you take matters, and seeking help is a sign of strength, not weakness.
              </p>
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
          <h1 className="text-5xl font-bold text-gray-800 mb-6">Mental Wellness Blog</h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Insights, tips, and resources to support your mental health journey
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-3 justify-center flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-400 to-blue-400 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Posts' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
                onClick={() => setSelectedPost(post.id)}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="mb-3">
                    <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <button className="text-green-600 font-medium flex items-center gap-2 hover:gap-3 transition-all">
                    Read More <ArrowRight className="w-4 h-4" />
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
