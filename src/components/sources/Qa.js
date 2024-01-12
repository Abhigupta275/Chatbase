import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DynamicSection from "./DynamicSection";

function Qa() {
  const [sections, setSections] = useState([]);

  const addNewInput = () => {
    setSections([...sections, { question: "", answer: "" }]);
  };

  const deleteSection = (index) => {
    const updatedSections = [...sections];
    updatedSections.splice(index, 1);
    setSections(updatedSections);
  };

  const deleteAllSections = () => {
    setSections([]);
  };

  const handleChangeQue = (e, index) => {
    const updatedSections = [...sections];
    updatedSections[index].question = e.target.value;
    setSections(updatedSections);
  };

  const handleChangeAns = (e, index) => {
    const updatedSections = [...sections];
    updatedSections[index].answer = e.target.value;
    setSections(updatedSections);
  };

  return (
    <div>
      <Sidebar lable={"Q&A"}>
        <div className="p-5">
          <div>
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
            {sections.map((section, index) => (
              <DynamicSection
                key={index}
                onDelete={() => deleteSection(index)}
                questions={section.question}
                answers={section.answer}
                handleChangeQue={(e) => handleChangeQue(e, index)}
                handleChangeAns={(e) => handleChangeAns(e, index)}
              />
            ))}
            <div className="my-2 flex justify-end">
              <button
                className="justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 flex items-center rounded-md border border-transparent bg-zinc-200 px-2 py-1 text-sm font-medium text-black shadow-sm hover:bg-zinc-300"
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
