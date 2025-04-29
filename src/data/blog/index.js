// src/data/blog/index.js
import proteinFolding from './antithetic-integral-feedback';
import aiHealthcare from './ai-systems-healthcare.js';
import automationState from './automation-state-capacity.js';
import interactiveMlPost from './interactive-ml-post.js';

// Array of all blog posts
const allPosts = [
  interactiveMlPost,  // Our new interactive post
  proteinFolding,
  aiHealthcare,
  automationState
];

// Sort posts by date (newest first)
const sortedPosts = [...allPosts].sort((a, b) => 
  new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Helper function to get recent posts
export const getRecentPosts = (count = 3) => {
  return sortedPosts.slice(0, count);
};

// Helper function to get post by ID
export const getPostById = (id) => {
  return sortedPosts.find(post => post.id === id);
};

export default sortedPosts;