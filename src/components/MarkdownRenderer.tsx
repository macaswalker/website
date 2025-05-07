import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css'; // Styles for math rendering

const MarkdownRenderer = ({ content }: { content: string }) => {
  return (
    <ReactMarkdown
      children={content}
      // @ts-ignore: avoid plugin type mismatch
      remarkPlugins={[remarkMath]}
      // @ts-ignore
      rehypePlugins={[rehypeKatex]}
    />
  );
};

export default MarkdownRenderer;
