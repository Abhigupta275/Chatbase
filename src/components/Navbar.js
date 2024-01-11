import React from "react";
import { Link } from "react-router-dom/dist";

function Navbar() {
  return (
    <>
      <header class="w-full flex-col rounded-t-3xl border-b lg:flex mb-10">
        <section class="z-10 flex flex-row items-center justify-between p-6 lg:px-8">
          <span class="hidden text-lg font-normal md:block text-zinc-800 ">
            Chatbase
          </span>
          <div class="flex flex-row items-center justify-center gap-3">
            <span class="hidden rounded-lg p-2 text-sm  font-semibold leading-6   text-zinc-600  outline-0 transition-all duration-75  ease-in-out hover:text-zinc-900 lg:block">
              Help
            </span>
            <span class="hidden rounded-lg p-2 text-sm  font-semibold leading-6   text-zinc-600  outline-0 transition-all duration-75  ease-in-out hover:text-zinc-900 lg:block">
              Account
            </span>
          </div>
        </section>
        <nav class="no-scrollbar flex flex-row items-center justify-start  gap-7 overflow-auto whitespace-nowrap p-1 font-medium lg:justify-center">
          <a
            class="text-zinc-500 hover:text-zinc-700 relative col-span-1  items-center p-1  text-sm font-medium"
            href="/chatbot/3tFwgBu9onyfmWh63meID"
          >
            Chatbot
            <div class="group-hover/link:bg-zinc-200 absolute -left-0 top-[1.95rem] h-[0.15rem] w-full rounded-3xl  transition-all   ease-in-out"></div>
          </a>
          <Link
            class="text-zinc-500 hover:text-zinc-700 relative col-span-1  items-center p-1  text-sm font-medium"
            to="/settings/general"
          >
            Settings
            <div class="group-hover/link:bg-zinc-200 absolute -left-0 top-[1.95rem] h-[0.15rem] w-full rounded-3xl  transition-all   ease-in-out"></div>
          </Link>
          <Link
            class="text-zinc-800 relative col-span-1  items-center p-1  text-sm font-medium"
            to="/dashboard/chatlogs"
          >
            Dashboard
            <div class="bg-violet-500 absolute -left-0 top-[1.95rem] h-[0.15rem] w-full rounded-3xl  transition-all   ease-in-out"></div>
          </Link>
          <Link to='/files'
            class="text-zinc-500 hover:text-zinc-700 relative col-span-1  items-center p-1  text-sm font-medium"
            href="/chatbot/3tFwgBu9onyfmWh63meID/update-chatbot-data"
          >
            Sources
            <div class="group-hover/link:bg-zinc-200 absolute -left-0 top-[1.95rem] h-[0.15rem] w-full rounded-3xl  transition-all   ease-in-out"></div>
          </Link>
          
        </nav>
      </header>
    </>
  );
}

export default Navbar;