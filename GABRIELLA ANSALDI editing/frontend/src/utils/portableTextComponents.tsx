// src/lib/portableTextComponents.tsx

import type {
  PortableTextComponents,
  PortableTextBlockComponent,
} from "@portabletext/react";
import type { ReactNode } from "react";

// ... (marks invariati)

const NormalBlock: PortableTextBlockComponent = ({ children }) => (
  <>
    {/* preserva \n dentro il block */}
    <span className="whitespace-pre-wrap break-words">
      {children as ReactNode}
    </span>
    {/* forza a capo tra i block */}
    <br />
  </>
);

export const portableTextComponents: PortableTextComponents = {
  marks: {
    strong: ({ children }) => <strong className="font-semibold">{children as ReactNode}</strong>,
    em: ({ children }) => <em className="italic">{children as ReactNode}</em>,
    underline: ({ children }) => <span className="underline underline-offset-2">{children as ReactNode}</span>,
    code: ({ children }) => <code className="rounded px-[0.2rem] py-[0.1rem] bg-black/5 text-[0.9em]">{children as ReactNode}</code>,
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href ?? "#";
      const isExternal = /^https?:\/\//i.test(href);
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          {children as ReactNode}
        </a>
      );
    },
  },
  block: {
    normal: NormalBlock,
  },
  list: {},
  listItem: {},
};
