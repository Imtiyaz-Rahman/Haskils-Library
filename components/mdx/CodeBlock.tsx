"use client";

import { useState } from "react";

export function CodeBlock({ children }: { children: React.ReactNode }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    const text =
      (document.querySelector("pre code") as HTMLElement)?.textContent ?? "";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="relative group my-8">
      <button
        className="absolute right-3 top-3 rounded bg-zinc-800 px-3 py-1 text-xs text-white opacity-0 transition-opacity group-hover:opacity-100"
        onClick={handleCopy}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
      <pre className="overflow-x-auto rounded-xl bg-black p-6 text-sm text-gray-100 border border-zinc-800">
        {children}
      </pre>
    </div>
  );
}
