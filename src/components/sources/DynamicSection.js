import React from "react";
import { useContext } from "react";
import { QaContext } from "../../context/Qa";

const DynamicSection = ({ index, onDelete, questions,handleChangeQue,handleChangeAns ,answers }) => {
  const {setQuestion,setAnswer} = useContext(QaContext)


  const handleContextChange = () =>{
    setQuestion(questions)
    setAnswer(answers)
  }


  return (
    <div className="my-8 rounded border p-2 shadow">
      <div className="my-8 rounded border p-2 shadow">
        <div className="flex justify-end">
          <button
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 underline-offset-4 hover:underline dark:text-zinc-50 h-9 px-4 py-2 text-zinc-600 hover:text-zinc-900"
            type="button"
            onClick={() => onDelete(index)}
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
        <div className="">
          <label className="mt-8 text-sm text-zinc-700">Question</label>
          <textarea
            value={questions}
            className="w-full min-w-0   appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3  text-zinc-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
            rows="3"
            onChange={(e) => {
              handleChangeQue(e, index);
              handleContextChange();
            }}
          >
            {questions}
          </textarea>
        </div>
        <div className="">
          <label className="mt-8 text-sm text-zinc-700">Answer</label>
          <textarea
          value={answers}
            className="w-full min-w-0   appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3  text-zinc-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
            rows="8"
            onChange={(e) => {
              handleChangeAns(e, index);
              handleContextChange(); 
            }}
          >{answers}</textarea>
        </div>
      </div>
    </div>
  );
};

export default DynamicSection;
