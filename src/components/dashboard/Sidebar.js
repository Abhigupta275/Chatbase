import React, { Children } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom/dist";

function Sidebar({ children }) {
  return (
    <>
      <Navbar />
      <section>
        <div className="mx-auto flex max-w-7xl flex-row justify-between px-4">
          <h4 className="my-8 text-3xl font-bold">Dashboard</h4>
        </div>
        <div className="max-w-7xl px-4 lg:mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 sm:col-span-4 lg:col-span-2">
              <div>
                <div className="md:hidden"></div>
                <div className="hidden grow flex-col gap-y-5 overflow-y-auto border-zinc-200  bg-white sm:flex ">
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col">
                      <li>
                        <ul role="list" className="space-y-1">
                          <li>
                            <Link
                              className="bg-zinc-50 text-violet-600 group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                              to="/dashboard/chatlogs"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="text-violet-600 h-6 w-6 shrink-0"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
                                ></path>
                              </svg>
                              Chat Logs
                            </Link>
                          </li>
                          <li>
                            <Link
                              className="text-zinc-700 hover:bg-zinc-50 hover:text-violet-600 group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                              to="/dashboard/leads"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="text-zinc-400 group-hover:text-violet-600 h-6 w-6 shrink-0"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                ></path>
                              </svg>
                              Leads
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-8 lg:col-span-10">
              {children}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Sidebar;
