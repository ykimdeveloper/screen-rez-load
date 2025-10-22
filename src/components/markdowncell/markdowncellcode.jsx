import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";
import { CellLine } from "./cellline";

export default function MarkdownCodeCellCode({
    code,
    output,
    language = "jsx",
    executionCount = 1,
  }) {
    return (
      <>
        {/* Input line */}
        <CellLine
          left={<span className="text-[#303f9f]">In [{executionCount}]:</span>}
          right={
            <div className="bg-[#f7f7f7] text-black rounded-md border border-gray-300 overflow-x-auto">
              <SyntaxHighlighter
                language={language}
                style={prism}
                showLineNumbers={false}
                customStyle={{
                  background: "#E8E8E8",
                  margin: 0,
                  padding: "0.75rem 1rem",
                  fontSize: "0.9rem",
                  lineHeight: "1.4rem",
                }}
              >
                {code.trim()}
              </SyntaxHighlighter>
            </div>
          }
        />
  
        {/* Output line */}
        {output && (
          <CellLine
            left={<span className="text-[#2e7d32]">Out[{executionCount}]:</span>}
            right={
              <div className="bg-[#1e1e1e] text-white rounded-md border border-gray-700 p-3 font-mono text-sm leading-[1.4rem]">
                {typeof output === "string" ? (
                  <pre className="m-0 whitespace-pre-wrap">{output}</pre>
                ) : (
                  output
                )}
              </div>
            }
          />
        )}
      </>
    );
  }