/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

interface BlogContentProps {
  body: any[]; // Sanity Portable Text array
  excerpt?: string;
}

const BlogContent: React.FC<BlogContentProps> = ({ body, excerpt }) => {
  // Custom components for rendering Portable Text
  const components = {
    block: {
      // Headings
      h1: ({ children }: any) => (
        <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8">
          {children}
        </h1>
      ),
      h2: ({ children }: any) => (
        <h2 className="text-3xl font-bold text-gray-900 mb-5 mt-8">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-6">
          {children}
        </h3>
      ),
      h4: ({ children }: any) => (
        <h4 className="text-xl font-semibold text-gray-900 mb-3 mt-5">
          {children}
        </h4>
      ),
      // Normal paragraph
      normal: ({ children }: any) => (
        <p className="text-gray-700 leading-relaxed mb-5 text-[17px]">
          {children}
        </p>
      ),
      // Blockquote
      blockquote: ({ children }: any) => (
        <blockquote className="border-l-4 border-blue-600 pl-6 py-2 my-6 italic text-gray-700">
          {children}
        </blockquote>
      ),
    },
    marks: {
      // Bold text
      strong: ({ children }: any) => (
        <strong className="font-bold text-gray-900">{children}</strong>
      ),
      // Italic text
      em: ({ children }: any) => <em className="italic">{children}</em>,
      // Code
      code: ({ children }: any) => (
        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600">
          {children}
        </code>
      ),
      // Links
      link: ({ value, children }: any) => {
        const target = (value?.href || "").startsWith("http")
          ? "_blank"
          : undefined;
        return (
          <a
            href={value?.href}
            target={target}
            rel={target === "_blank" ? "noopener noreferrer" : undefined}
            className="text-blue-600 hover:text-blue-800 underline"
          >
            {children}
          </a>
        );
      },
    },
    list: {
      // Bullet list
      bullet: ({ children }: any) => (
        <ul className="list-disc list-outside ml-6 mb-5 space-y-2">
          {children}
        </ul>
      ),
      // Numbered list
      number: ({ children }: any) => (
        <ol className="list-decimal list-outside ml-6 mb-5 space-y-2">
          {children}
        </ol>
      ),
    },
    listItem: {
      bullet: ({ children }: any) => (
        <li className="text-gray-700 leading-relaxed pl-2">{children}</li>
      ),
      number: ({ children }: any) => (
        <li className="text-gray-700 leading-relaxed pl-2">{children}</li>
      ),
    },
    types: {
      image: ({ value }: any) => {
        if (!value?.asset?._ref) {
          return null;
        }
        return (
          <div className="my-8">
            <Image
              src={value.asset._ref}
              alt={value.alt || "Blog image"}
              width={800}
              height={500}
              className="rounded-lg w-full"
            />
            {value.caption && (
              <p className="text-center text-sm text-gray-500 mt-2">
                {value.caption}
              </p>
            )}
          </div>
        );
      },
    },
  };

  return (
    <div className="prose prose-lg max-w-none">
      {/* Introduction/Excerpt */}
      {excerpt && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            Introduction
          </h2>
          <p className="text-gray-700 leading-relaxed text-[17px]">{excerpt}</p>
        </div>
      )}

      {/* Main Content - Render Portable Text */}
      <div className="portable-text-content">
        <PortableText value={body} components={components} />
      </div>
    </div>
  );
};

export default BlogContent;
