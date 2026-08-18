import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold text-orange mb-4">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-alabaster mb-3 mt-6">{children}</h2>
  ),
  p: ({ children }) => (
    <p className="text-alabaster leading-relaxed mb-4">{children}</p>
  ),
  em: ({ children }) => <em className="text-orange italic">{children}</em>,
  strong: ({ children }) => (
    <strong className="text-orange font-bold">{children}</strong>
  ),
  code: ({ children }) => (
    <code className="bg-prussian text-orange font-mono px-1 rounded">
      {children}
    </code>
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
