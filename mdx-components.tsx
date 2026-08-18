import type { MDXComponents } from "mdx/types";
import { CodeBlock } from "./components/mdx/CodeBlock";

const components: MDXComponents = {
  // Headings
  h1: ({ children }) => (
    <h1 className="text-5xl font-bold text-orange-600 mb-6 mt-10">
      {children}
    </h1>
  ),

  h2: ({ children }) => (
    <h2 className="text-4xl font-bold text-orange-600 mb-5 mt-10">
      {children}
    </h2>
  ),

  h3: ({ children }) => (
    <h3 className="text-3xl font-semibold text-orange-600 mb-4 mt-8">
      {children}
    </h3>
  ),

  h4: ({ children }) => (
    <h4 className="text-2xl font-semibold text-orange-600 mb-3 mt-6">
      {children}
    </h4>
  ),

  h5: ({ children }) => (
    <h5 className="text-xl font-semibold text-orange-600 mb-3 mt-6">
      {children}
    </h5>
  ),

  h6: ({ children }) => (
    <h6 className="text-lg font-semibold text-orange-600 mb-2 mt-4">
      {children}
    </h6>
  ),

  // Paragraphs
  p: ({ children }) => (
    <p className="text-black leading-8 text-lg mb-6">{children}</p>
  ),

  // Bold
  strong: ({ children }) => (
    <strong className="font-bold text-black">{children}</strong>
  ),

  // Italic
  em: ({ children }) => <em className="italic text-black">{children}</em>,

  // Links
  a: ({ children, href }) => (
    <a
      href={href}
      className="text-orange-600 font-medium underline hover:text-orange-700"
    >
      {children}
    </a>
  ),

  // Inline Code
  code: ({ children }) => (
    <code className="rounded-md border border-orange-200 bg-orange-50 text-orange-700 px-2 py-1 text-sm font-mono">
      {children}
    </code>
  ),

  // Code Blocks
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,

  // Blockquotes
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-orange-500 bg-orange-50 px-6 py-4 italic text-gray-700 my-6 rounded-r-lg">
      {children}
    </blockquote>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="list-disc pl-8 mb-6 space-y-2 text-black">{children}</ul>
  ),

  ol: ({ children }) => (
    <ol className="list-decimal pl-8 mb-6 space-y-2 text-black">{children}</ol>
  ),

  li: ({ children }) => <li className="leading-7">{children}</li>,

  // Horizontal Rule
  hr: () => <hr className="my-10 border-zinc-300" />,

  // Images
  img: ({ src, alt }) => (
    <img src={src} alt={alt} className="rounded-xl w-full my-8" />
  ),

  // Tables
  table: ({ children }) => (
    <div className="overflow-x-auto my-8">
      <table className="min-w-full border border-zinc-300">{children}</table>
    </div>
  ),

  thead: ({ children }) => <thead className="bg-orange-100">{children}</thead>,

  tbody: ({ children }) => <tbody>{children}</tbody>,

  tr: ({ children }) => (
    <tr className="border-b border-zinc-200">{children}</tr>
  ),

  th: ({ children }) => (
    <th className="px-4 py-3 text-left font-semibold text-black">{children}</th>
  ),

  td: ({ children }) => <td className="px-4 py-3 text-black">{children}</td>,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
