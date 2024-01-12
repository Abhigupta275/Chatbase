import React, { useState } from "react";
import Sidebar from "./Sidebar";

export default function Website() {
  const [inputFields, setInputFields] = useState([]);

  const addNewInput = () => {
    const newInputField = {
      id: Date.now(),
      value: "",
    };

    setInputFields((prevInputFields) => [...prevInputFields, newInputField]);
  };

  const handleInputChange = (id, value) => {
    setInputFields((prevInputFields) =>
      prevInputFields.map((field) =>
        field.id === id ? { ...field, value } : field
      )
    );
  };

  const deleteInputField = (id) => {
    setInputFields((prevInputFields) =>
      prevInputFields.filter((field) => field.id !== id)
    );
  };

  return (
    <div>
      <Sidebar lable={"Website"}>
        <div className="p-5">
          <div>
            <label className="my-2 block text-sm font-medium leading-6 text-zinc-900">
              Crawl
            </label>
            <div className="relative mt-2 rounded-md">
              <div className="flex flex-col gap-2 lg:flex-row ">
                <input
                  type="text"
                  className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                  name="website"
                  placeholder="https://www.example.com"
                  value=""
                />
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2">
                  Fetch links
                </button>
              </div>
              <div className="py-4 text-sm text-zinc-600">
                This will crawl all the links starting with the URL (not
                including files on the website).
              </div>
            </div>
            <div className="my-4 flex items-center">
              <hr className="w-full border-t border-zinc-300" />
              <span className="whitespace-nowrap px-2 text-zinc-600">OR</span>
              <hr className="w-full border-t border-zinc-300" />
            </div>
            <div>
              <label
                for="sitemap"
                className="my-2 block text-sm font-medium leading-6 text-zinc-900"
              >
                Submit Sitemap
              </label>
              <div className="relative mt-2 rounded-md ">
                <div className="flex flex-col gap-2 lg:flex-row">
                  <input
                    type="text"
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                    name="sitemap"
                    placeholder="https://www.example.com/sitemap.xml"
                    value=""
                  />
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2">
                    Load sitemap
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <div className="my-4 flex items-center">
                <hr className="w-full border-t border-zinc-300" />
                <span className="whitespace-nowrap px-2 text-zinc-600">
                  Included Links
                </span>
                <hr className="w-full border-t border-zinc-300" />
              </div>
              <div
                className="relative overflow-hidden mt-5 h-[36rem]"
                style={{
                  position: "relative",
                  "--radix-scroll-area-corner-width": "0px",
                  "--radix-scroll-area-corner-height": "0px",
                }}
              >
                <style>
                  {`
          [data-radix-scroll-area-viewport] {
            scrollbar-width: none;
            -ms-overflow-style: none;
            -webkit-overflow-scrolling: touch;
          }
          [data-radix-scroll-area-viewport]::-webkit-scrollbar {
            display: none;
          }
        `}
                </style>
                <div
                  data-radix-scroll-area-viewport=""
                  className="h-full w-full rounded-[inherit]"
                  style={{ overflow: "hidden scroll" }}
                >
                  <div style={{ minWidth: "100%", display: "table" }}>
                    <div className="p-2">
                      <div>
                        {/* Render input fields */}
                        {inputFields.map((inputField) => (
                          <div
                            key={inputField.id}
                            className="relative mt-2 rounded-md"
                          >
                            <div className="flex flex-col gap-2 lg:flex-row">
                              <input
                                type="text"
                                className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Enter value"
                                value={inputField.value}
                                onChange={(e) =>
                                  handleInputChange(
                                    inputField.id,
                                    e.target.value
                                  )
                                }
                              />
                              <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-red-500 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-9 px-4 py-2"
                                onClick={() => deleteInputField(inputField.id)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                  />
                                </svg>
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-2 flex justify-end">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2 hover:bg-zinc-200"
                  type="button"
                  onClick={addNewInput}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
