// src/pages/BlogPost.js
import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { getPostById } from "../data/blog";
import ReactMarkdown from "react-markdown";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';

// Simple Counter component for use in blog posts
const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="p-6 text-center border border-gray-300 rounded-md my-8">
      <h3 className="text-xl font-semibold mb-4">Interactive Counter</h3>
      <p className="text-4xl mb-6">{count}</p>
      <div className="flex justify-center space-x-4">
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrease
        </button>
        <button 
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Increase
        </button>
      </div>
    </div>
  );
};

// Color Picker component for use in blog posts
const ColorPicker = () => {
  const [color, setColor] = useState('#3b82f6');
  
  return (
    <div className="p-6 border border-gray-300 rounded-md my-8">
      <h3 className="text-xl font-semibold mb-4">Color Picker</h3>
      <div 
        className="w-full h-32 mb-4 rounded-md border border-gray-300"
        style={{ backgroundColor: color }}
      ></div>
      <div className="flex items-center space-x-4">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="h-10 w-10"
        />
        <span className="font-mono">{color}</span>
      </div>
    </div>
  );
};

// Slider component for linear regression demo
const LinearRegressionDemo = () => {
  const [slope, setSlope] = useState(0.8);
  const [intercept, setIntercept] = useState(1);
  
  // Sample data points
  const data = [
    { x: 1, y: 2 },
    { x: 2, y: 4 },
    { x: 3, y: 5 },
    { x: 4, y: 4 },
    { x: 5, y: 5 }
  ];
  
  // Calculate predictions and error
  const predictions = data.map(point => slope * point.x + intercept);
  const errors = data.map((point, i) => Math.abs(point.y - predictions[i]));
  const totalError = errors.reduce((sum, err) => sum + err, 0);
  
  return (
    <div className="p-4 border border-gray-300 rounded-md bg-gray-50 my-8">
      <h3 className="text-lg font-medium mb-4">Linear Regression Interactive Demo</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Slope: {slope.toFixed(2)}
        </label>
        <input
          type="range"
          min="-2"
          max="2"
          step="0.1"
          value={slope}
          onChange={e => setSlope(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Intercept: {intercept.toFixed(2)}
        </label>
        <input
          type="range"
          min="-5"
          max="5"
          step="0.1"
          value={intercept}
          onChange={e => setIntercept(parseFloat(e.target.value))}
          className="w-full"
        />
      </div>
      
      <div className="mb-4">
        <div className="h-64 relative border border-gray-300 bg-white">
          {/* Coordinate system */}
          <div className="absolute left-0 right-0 bottom-1/2 border-b border-gray-300"></div>
          <div className="absolute top-0 bottom-0 left-1/2 border-l border-gray-300"></div>
          
          {/* Plot points */}
          {data.map((point, i) => (
            <div 
              key={i}
              className="absolute h-2 w-2 bg-blue-500 rounded-full"
              style={{ 
                bottom: `${(point.y + 5) * 5}%`, 
                left: `${(point.x + 5) * 5}%` 
              }}
            ></div>
          ))}
          
          {/* Plot line */}
          <div 
            className="absolute h-0.5 bg-red-500 transform origin-left"
            style={{ 
              bottom: `${(intercept + 5) * 5}%`, 
              left: '25%',
              width: '50%',
              transform: `rotate(${Math.atan(slope) * (180 / Math.PI)}deg)`
            }}
          ></div>
        </div>
      </div>
      
      <div className="text-sm">
        <p>Equation: y = {slope.toFixed(2)}x + {intercept.toFixed(2)}</p>
        <p>Total Error: {totalError.toFixed(2)}</p>
      </div>
    </div>
  );
};

// Function to safely format a date
const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    
    // Check if date is invalid
    if (isNaN(date.getTime())) {
      return "Date not available";
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Date not available";
  }
};

// Process the content and replace markers with placeholders
const processContent = (content) => {
  if (!content) return "";
  
  // Replace marker comments with invisible placeholders
  return content
    .replace(/<!--\s*LINEAR_REGRESSION\s*-->/g, '<div id="linear-regression-placeholder"></div>')
    .replace(/<!--\s*COUNTER\s*-->/g, '<div id="counter-placeholder"></div>')
    .replace(/<!--\s*COLOR_PICKER\s*-->/g, '<div id="color-picker-placeholder"></div>');
};

// Main BlogPost component
export default function BlogPost() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const post = getPostById(postId);
  const [contentWithPlaceholders, setContentWithPlaceholders] = useState("");

  // If post doesn't exist, redirect to blog page
  useEffect(() => {
    if (!post) {
      navigate("/blog");
    } else {
      // Process content to replace markers with placeholders
      setContentWithPlaceholders(processContent(post.content));
    }
  }, [post, navigate]);

  if (!post) return null;

  // Check if the post needs interactive components
  const hasRegression = post.content.includes('<!-- LINEAR_REGRESSION -->');
  const hasCounter = post.content.includes('<!-- COUNTER -->');
  const hasColorPicker = post.content.includes('<!-- COLOR_PICKER -->');

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link 
          to="/blog" 
          className="text-black hover:underline flex items-center"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5 mr-1" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
          Back to All Posts
        </Link>
      </div>

      <article className="max-w-none">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">{post.title}</h1>
        
        <div className="flex flex-col md:flex-row md:items-center text-gray-600 mb-8">
          <p className="text-sm md:text-base">{post.publication}</p>
          <span className="hidden md:inline mx-2">•</span>
          <p className="text-sm md:text-base">
            {formatDate(post.date)}
          </p>
        </div>
        
        {/* Content rendering with custom code blocks */}
        <div className="content prose prose-headings:font-bold prose-headings:text-black prose-p:text-black max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkMath]}
            rehypePlugins={[rehypeKatex]}
            components={{
              // Custom handler for code blocks
              code({node, inline, className, children, ...props}) {
                const match = /language-(\w+)/.exec(className || '');
                const language = match ? match[1] : '';
                
                if (inline) {
                  return <code className="bg-gray-200 px-1 rounded text-sm" {...props}>{children}</code>;
                }
                
                return (
                  <div className="relative group">
                    <button
                      onClick={() => navigator.clipboard.writeText(children)}
                      className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      Copy
                    </button>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                      <code className={language ? `language-${language}` : ''}>
                        {children}
                      </code>
                    </pre>
                  </div>
                );
              },
              // Make sure headings are properly styled
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
              // Add spacing between paragraphs
              p: ({node, ...props}) => <p className="my-4" {...props} />,
              // Make sure lists are properly styled
              ul: ({node, ...props}) => <ul className="list-disc pl-8 my-4" {...props} />,
              ol: ({node, ...props}) => <ol className="list-decimal pl-8 my-4" {...props} />,
              // Style links
              a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />
            }}
          >
            {contentWithPlaceholders}
          </ReactMarkdown>
          
          {/* Render interactive components */}
          {hasRegression && <LinearRegressionDemo />}
          {hasCounter && <Counter />}
          {hasColorPicker && <ColorPicker />}
        </div>
      </article>
    </div>
  );
}