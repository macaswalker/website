import React from "react";
import { Link } from "react-router-dom";
import portfolioPosts from "../data/portfolio";

export default function Portfolio() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-black">Portfolio Projects</h1>

      <div className="space-y-8">
        {portfolioPosts.map((post) => (
          <div key={post.id} className="p-6 bg-white border border-black hover:shadow-md transition-shadow">
            <Link to={`/portfolio/${post.id}`}>
              <h2 className="text-xl md:text-2xl font-semibold text-black hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-black mt-1">{post.publication}</p>
            <p className="text-sm text-gray-500 mt-1">
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
            <p className="mt-3 text-black">{post.summary}</p>
            <div className="mt-4">
              <Link 
                to={`/portfolio/${post.id}`}
                className="inline-block px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition-colors"
              >
                View Project
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
