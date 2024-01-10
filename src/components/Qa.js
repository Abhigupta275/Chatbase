import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Qa() {
  const [sections, setSections] = useState([]);

  const addNewInput = () => {
    setSections([
      ...sections,
      <DynamicSection
        key={sections.length}
        onDelete={() => deleteSection(sections.length)}
      />,
    ]);
  };

  const deleteSection = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };


  const deleteAllSections = () => {
    setSections([]);
  };


  // Component for the section you want to add dynamically
  const DynamicSection = ({ onDelete }) => {
    return (
      <div className="my-8 rounded border p-2 shadow">
        <div class="my-8 rounded border p-2 shadow">
          {/* Delete button */}
          <div className="flex justify-end">
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 underline-offset-4 hover:underline dark:text-zinc-50 h-9 px-4 py-2 text-zinc-600 hover:text-zinc-900"
              type="button"
              onClick={onDelete}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-trash ml-1 h-4 w-4 text-red-600"
              >
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
            </button>
          </div>
          <div class="  ">
            <label class="mt-8 text-sm text-zinc-700">Question</label>
            <textarea
              class="w-full min-w-0   appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3  text-zinc-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
              rows="3"
            ></textarea>
          </div>
          <div class="">
            <label class="mt-8 text-sm text-zinc-700">Answer</label>
            <textarea
              class="w-full min-w-0   appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3  text-zinc-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
              rows="8"
            ></textarea>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Sidebar lable={"Q&A"}>
        <div className="p-5">
          <div>
            {/* Delete all button (conditionally rendered) */}
            {sections.length > 0 && (
              <div className="flex justify-end">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-transparent shadow-sm dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 rounded-md border border-red-500 px-2 py-1 text-sm font-medium text-red-500 transition-colors duration-200 ease-in-out hover:bg-red-50 hover:text-red-700"
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded="false"
                  aria-controls="radix-:ro:"
                  data-state="closed"
                  onClick={deleteAllSections}
                >
                  Delete all
                </button>
              </div>
            )}
            {/* Map through sections */}
            {sections.map((section, index) => (
              <DynamicSection
                key={index}
                onDelete={() => deleteSection(index)}
              />
            ))}
            <div class="my-2 flex justify-end">
              <button
                class="justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 flex items-center rounded-md border border-transparent bg-zinc-200 px-2 py-1 text-sm font-medium text-black shadow-sm hover:bg-zinc-300"
                type="button"
                onClick={addNewInput}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}

export default Qa;
