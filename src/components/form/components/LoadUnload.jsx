import { FaCloudDownloadAlt, FaCode } from "react-icons/fa";
import React, { useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {ResumeContext} from "../../builder";
import { formatResumeJson, orderResumeData } from "../../utility/resumeJson";

const LoadUnload = () => {
  const { resumeData, setResumeData } = useContext(ResumeContext);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [jsonText, setJsonText] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (isEditorOpen) {
      setJsonText(formatResumeJson(resumeData));
      setError("");
    }
    // Only refresh the editor when it opens, not while typing.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditorOpen]);

  const handleDownload = (data, filename, event) => {
    event.preventDefault();
    const jsonData = formatResumeJson(data);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  };

  const handleApply = (event) => {
    event.preventDefault();
    try {
      const parsed = JSON.parse(jsonText);
      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        throw new Error("JSON must be an object");
      }
      setResumeData(orderResumeData(parsed));
      setError("");
      setIsEditorOpen(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid JSON");
    }
  };

  return (
    <div className="flex flex-wrap gap-4 mb-2 justify-center">
      <div className="inline-flex flex-row items-center gap-2">
        <h2 className="text-[1.2rem] text-white">Load Data</h2>
        <button
          type="button"
          aria-label="Edit JSON"
          className="p-2 text-white bg-blue-700 rounded"
          onClick={() => setIsEditorOpen(true)}
        >
          <FaCode className="text-[1.2rem] text-white" />
        </button>
      </div>
      <div className="inline-flex flex-row items-center gap-2">
        <h2 className="text-[1.2rem] text-white">Save Data</h2>
        <button
          type="button"
          aria-label="Save Data"
          className="p-2 text-white bg-blue-700 rounded"
          onClick={(event) =>
            handleDownload(
              resumeData,
              resumeData.name + " by ATSResume.json",
              event
            )
          }
        >
          <FaCloudDownloadAlt className="text-[1.2rem] text-white" />
        </button>
      </div>

      {isEditorOpen &&
        typeof document !== "undefined" &&
        createPortal(
        <div
          className="exclude-print fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setIsEditorOpen(false)}
        >
          <div
            className="flex w-full max-w-4xl max-h-[90vh] flex-col rounded-lg bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b px-4 py-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Resume JSON
              </h3>
              <button
                type="button"
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setIsEditorOpen(false)}
              >
                Close
              </button>
            </div>
            <textarea
              className="min-h-[24rem] flex-1 resize-y border-0 bg-slate-50 p-4 font-mono text-xs leading-5 text-gray-900 outline-none"
              spellCheck={false}
              value={jsonText}
              onChange={(event) => {
                setJsonText(event.target.value);
                setError("");
              }}
            />
            {error && (
              <p className="px-4 py-2 text-sm text-red-600">{error}</p>
            )}
            <div className="flex justify-end gap-2 border-t px-4 py-3">
              <button
                type="button"
                className="rounded px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsEditorOpen(false)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="rounded bg-blue-700 px-4 py-2 font-semibold text-white hover:bg-blue-800"
                onClick={handleApply}
              >
                Apply JSON
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default LoadUnload;
