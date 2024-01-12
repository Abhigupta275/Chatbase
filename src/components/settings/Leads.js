import React from 'react'
import Sidebar from './Sidebar'

function SLeads() {
  return (
    <div>
      <Sidebar><div className="col-span-12 sm:col-span-8 lg:col-span-10">
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
            <label className="text-md block font-semibold">
              Title
            </label>
            <div className="flex gap-5">
              <input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50 md:w-[32rem]"
              name="title" maxlength="300" value="Let us know how to contact you" />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2">
                Reset
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-b py-5  ">
            <div className=" flex flex-row items-center justify-between ">
              <label className="text-md block pb-2 font-medium text-zinc-700">
                Name
              </label>
              {/* <button type="button" role="switch" aria-checked="true" data-state="checked"
              value="on" className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet-500 data-[state=unchecked]:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800">
                <span data-state="checked" className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-zinc-950">
                </span>
              </button> */}
            </div>
            <div className="flex flex-row gap-5">
              <input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50 md:w-[32rem]"
              name="name_message" placeholder="Enter name message" maxlength="300" value="" />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2">
                Reset
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-b py-5  ">
            <div className=" flex flex-row items-center justify-between ">
              <label className="text-md block pb-2 font-medium text-zinc-700">
                Email
              </label>
              {/* <button type="button" role="switch" aria-checked="true" data-state="checked"
              value="on" className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet-500 data-[state=unchecked]:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800">
                <span data-state="checked" className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-zinc-950">
                </span>
              </button> */}
            </div>
            <div className="flex flex-row gap-5">
              <input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50 md:w-[32rem]"
              name="email_message" placeholder="Enter email message" maxlength="300"
              value="" />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2">
                Reset
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 border-b py-5  ">
            <div className=" flex flex-row items-center justify-between ">
              <label className="text-md block pb-2 font-medium text-zinc-700">
                Phone
              </label>
              {/* <button type="button" role="switch" aria-checked="true" data-state="checked"
              value="on" className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet-500 data-[state=unchecked]:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800">
                <span data-state="checked" className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-zinc-950">
                </span>
              </button> */}
            </div>
            <div className="flex flex-row gap-5">
              <input className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50 md:w-[32rem]"
              name="phone_message" placeholder="Enter phone message" maxlength="300"
              value="" />
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2">
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-end bg-zinc-100 px-5 py-3">
      <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-7 rounded-md px-3">
        Save
      </button>
    </div>
  </div>
</div>
      </Sidebar>
    </div>
  )
}

export default SLeads
