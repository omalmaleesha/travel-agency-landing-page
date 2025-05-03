import React from 'react';

export function Blog() {
  const blogPosts = [
    { title: 'Top 10 Travel Destinations', content: 'Discover the most popular travel destinations for 2025.' },
    { title: 'How to Pack for a Road Trip', content: 'Learn the essentials for packing efficiently for your next adventure.' },
    { title: 'The Benefits of Traveling', content: 'Explore how traveling can improve your mental and physical well-being.' },
  ];

  return (
    <section className="w-full py-16 md:py-24">
      <div className="container px-6 md:px-12">
        <h1 className="text-3xl md:text-4xl font-serif mb-6">Blog</h1>
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="border-b border-white/20 pb-4">
              <h2 className="text-2xl font-medium mb-2">{post.title}</h2>
              <p className="text-white/70">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}