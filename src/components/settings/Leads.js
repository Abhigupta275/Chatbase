import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

function SLeads() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [title, setTitle] = useState("");

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        "https://jellyfish-app-5tivv.ondigitalocean.app/settings/65a8c631eae71bb73a4a19c8/lead", 
        {
          name,
          email,
          phone,
          title,
        }
      );
      console.log("API response:", response.data);
    } catch (error) {
      console.error("API error:", error);
    }
  };

  return (
    <div>
      <Sidebar>
        <div className="col-span-12 sm:col-span-8 lg:col-span-10">
          <div className="mb-10 rounded border border-zinc-200">
            <div className="border-b border-zinc-200 bg-white px-5 py-4">
              <h3 className="text-xl font-semibold leading-6 text-zinc-900 ">
                Leads
              </h3>
            </div>
            <div className="p-5">
              <div className="pb-4">
                <div className=" flex w-full flex-col ">
                  <div className="flex flex-col gap-2 py-4">
                    <label className="text-md block font-semibold">Title</label>
                    <div className="flex gap-5">
                      <input
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50 md:w-[32rem]"
                        name="title"
                        maxLength="300"
                        value={title}
                        placeholder="Enter some title here"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2"
                        onClick={() => setTitle("")}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 border-b py-5  ">
                    <div className=" flex flex-row items-center justify-between ">
                      <label className="text-md block pb-2 font-medium text-zinc-700">
                        Name
                      </label>
                    </div>
                    <div className="flex flex-row gap-5">
                      <input
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50 md:w-[32rem]"
                        name="name_message"
                        placeholder="Enter name message"
                        maxLength="300"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2"
                        onClick={() => setName("")}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 border-b py-5  ">
                    <div className=" flex flex-row items-center justify-between ">
                      <label className="text-md block pb-2 font-medium text-zinc-700">
                        Email
                      </label>
                    </div>
                    <div className="flex flex-row gap-5">
                      <input
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50 md:w-[32rem]"
                        name="email_message"
                        placeholder="Enter email message"
                        maxLength="300"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2"
                        onClick={() => setEmail("")}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 border-b py-5  ">
                    <div className=" flex flex-row items-center justify-between ">
                      <label className="text-md block pb-2 font-medium text-zinc-700">
                        Phone
                      </label>
                    </div>
                    <div className="flex flex-row gap-5">
                      <input
                        className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50 md:w-[32rem]"
                        name="phone_message"
                        placeholder="Enter phone message"
                        maxLength="300"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2"
                        onClick={() => setPhone("")}
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end bg-zinc-100 px-5 py-3">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-7 rounded-md px-3"
                onClick={handleSave}
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

export default SLeads;
