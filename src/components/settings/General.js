import React from "react";
import Sidebar from "./Sidebar";

function General() {
  return (
    <div>
      <Sidebar>
        <div className="col-span-12 sm:col-span-8 lg:col-span-10">
          <div className="mb-10 rounded border border-zinc-200">
            <div className="border-b border-zinc-200 bg-white px-5 py-4">
              <h3 className="text-xl font-semibold leading-6 text-zinc-900 ">
                General
              </h3>
            </div>
            <div className="p-5">
              <div className="pb-8">
                <label className="block text-sm font-medium text-zinc-700">
                  Chatbot ID
                </label>
                <div className="mt-1 flex items-center space-x-4">
                  <div className="font-semibold">XtmAh0NHl8LZEzu3GEhN9</div>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 border border-zinc-200 bg-transparent shadow-sm hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-2 py-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="pb-8">
                <label className="block text-sm font-medium text-zinc-700">
                  Number of characters
                </label>
                <div className="mt-1 font-semibold">1,071</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-700">
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
                    name="name"
                    value="Uploaded file.pdf "
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-end bg-zinc-100 px-5 py-3">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-7 rounded-md px-3"
                disabled=""
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}

export default General;
