import React from "react";
import { useParams } from "react-router-dom";
import { getPortfolioPostById } from "../data/portfolio";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function PortfolioPost() {
  const { postId } = useParams();
  const post = getPortfolioPostById(postId);

  if (!post) return <p className="text-center py-16 text-red-600">Project not found.</p>;

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4 text-black">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        {new Date(post.date).toLocaleDateString()}
      </p>

      <div className="prose max-w-none text-black">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({node, ...props}) => <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />,
            h2: ({node, ...props}) => <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />,
            h3: ({node, ...props}) => <h3 className="text-xl font-bold mt-5 mb-2" {...props} />,
            p: ({node, ...props}) => <p className="my-4" {...props} />,
            ul: ({node, ...props}) => <ul className="list-disc pl-6 my-4" {...props} />,
            ol: ({node, ...props}) => <ol className="list-decimal pl-6 my-4" {...props} />,
            a: ({node, ...props}) => <a className="text-blue-600 hover:underline" {...props} />
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>

      {post.video && (
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Demo</h2>
          <video controls className="w-full border border-black">
            <source src={post.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
