import React from "react";
import MarkdownCodeCellDesc from "./markdowncelldesc";
import MarkdownCodeCellCode from "./markdowncellcode";
import NotebookGrid from "./notebookgrid";

 
export default function MarkdownCodeCell({ markdown, code, output, executionCount }) {
  return (
    <NotebookGrid>
      {markdown && <MarkdownCodeCellDesc markdown={markdown} />}
      {code && (
        <MarkdownCodeCellCode
          code={code}
          output={output}
          executionCount={executionCount}
        />
      )}
    </NotebookGrid>
  );
}