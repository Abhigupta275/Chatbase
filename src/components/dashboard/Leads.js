import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ReactDatePicker from "../ReactDatePicker";

function Leads() {

  return (
    <>
      <Sidebar>
        <div className="mb-10 rounded border border-zinc-200">
          <div className="border-b border-zinc-200 bg-white px-5 py-4">
            <h3 className="text-xl font-semibold leading-6 text-zinc-900 ">
              Leads
            </h3>
          </div>
          <div className="p-5">
            <div className="">
              <div>
                <div className="">
                  <label className="text-md mb-3 block font-medium text-zinc-700">
                    Filters
                  </label>
                  <div className="mb-2 flex flex-col border-b border-zinc-200 pb-5 sm:justify-between md:flex-row">
                    <div className="relative text-gray-700">
                      <ReactDatePicker />
                    </div>
                    <div
                      className="relative inline-block text-left"
                      data-headlessui-state=""
                    >
                      <div>
                        <button
                          className="group inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 md:w-fit"
                          id="headlessui-menu-button-:rt3:"
                          type="button"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-headlessui-state=""
                        >
                          Export
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                            className="ml-2 h-5 w-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-12 sm:flex-row sm:space-x-8 sm:space-y-0 ">
                <div className=" w-full  ">
                  <div className="my-24 text-center">No customers found</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Sidebar>
    </>
  );
}

export default Leads;
