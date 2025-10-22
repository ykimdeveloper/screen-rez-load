// MarkdownCodeCellDesc.jsx
import React from "react";
import ReactMarkdown from "react-markdown";
import { CellLine } from "./cellline";

export default function MarkdownCodeCellDesc({ markdown }) {
  return (
    <CellLine
      left={null}
      right={
        <div className="prose max-w-none text-left">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      }
    />
  );
}