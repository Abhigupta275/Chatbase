import React from 'react'
import Sidebar from './Sidebar'

function ChatInterface() {
  return (
    <div>
      <Sidebar>
      <div className="col-span-12 sm:col-span-8 lg:col-span-10">
  <div className="mb-10 rounded border border-zinc-200">
    <div className="border-b border-zinc-200 bg-white px-5 py-4">
      <h3 className="text-xl font-semibold leading-6 text-zinc-900 ">
        Chat Interface
      </h3>
    </div>
    <div className="p-5">
      <h4 className="mb-8 text-sm text-zinc-600">
        Note: Applies when embedded on a website
      </h4>
      <div className=" flex flex-col justify-between lg:flex-row lg:space-x-8">
        <div className="w-2/2 flex-1 pb-5 lg:w-1/2">
          <div className="pb-8">
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-zinc-700">
                Initial Messages
              </label>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2">
                Reset
              </button>
            </div>
            <div className="mt-1">
              <textarea name="initial_messages" placeholder="Hi! What can I help you with?"
              className="w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3   text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
              maxlength="1000">
                Hi! What can I help you with?
              </textarea>
              <p className="mt-2 text-sm text-zinc-500">
                Enter each message in a new line.
              </p>
            </div>
          </div>
          <div className="pb-8">
            <label className="block text-sm font-medium text-zinc-700">
              Suggested Messages
            </label>
            <div className="mt-1">
              <textarea name="suggested_messages" placeholder="What is example.com?"
              className="w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3   text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm">
              </textarea>
              <p className="mt-2 text-sm text-zinc-500">
                Enter each message in a new line.
              </p>
            </div>
          </div>
          <div className="pb-8">
            <label className="block text-sm font-medium text-zinc-700">
              Message Placeholder
            </label>
            <div className="mt-1">
              <input type="text" className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
              name="name" placeholder="Message..." maxlength="100" value="" />
            </div>
          </div>
          <div className="pb-8">
            <label className="block text-sm font-medium text-zinc-700">
              Theme
            </label>
            <select id="theme" name="theme" className="w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3   text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm">
              <option value="light">
                light
              </option>
              <option value="dark">
                dark
              </option>
            </select>
          </div>
          <div className="pb-8">
            <label className="block text-sm font-medium text-zinc-700">
              Update chatbot profile picture
            </label>
            <input type="file" className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
            id="bot_profile_picture" accept="image/*" name="bot_profile_picture" />
            <label className="block text-sm font-medium text-red-700">
            </label>
          </div>
          <div className="pb-8">
            <label className="block text-sm font-medium text-zinc-700">
              Remove Chatbot Profile Picture
            </label>
            <div className="flex flex-row items-center">
              <div className="ml-2 flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-violet-600 accent-violet-600"
                name="should_remove_bot_profile_picture"/>
              </div>
            </div>
          </div>
          <div className="pb-8">
            <label className="block text-sm font-medium text-zinc-700">
              Display name
            </label>
            <div className="mt-1">
              <input type="text" className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
              name="name" value=""/>
            </div>
          </div>
          <div className="pb-8">
            <div className="flex justify-between">
              <label className="block text-sm font-medium text-zinc-700">
                User Message Color
              </label>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2">
                Reset
              </button>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="border bg-zinc-100 p-1" role="colorPicker">
                  <div className="h-5 w-5" role="colorPicker" style={{backgroundColor: 'rgb(59, 129, 246)'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="pb-10 text-sm text-zinc-900">
            **If the changes here don't show up immediately on your website try clearing
            your browser cache or use incognito. (New users will see the changes immediately)**
          </p>
          <div className="pb-8">
            <label className="block text-sm font-medium text-zinc-700">
              Update chat icon
            </label>
            <input type="file" className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
            id="chat_icon" accept="image/*" name="bot_profile_picture"/>
            <label className="block text-sm font-medium text-red-700">
              Images can only be square
            </label>
          </div>
          <div className="pb-2">
            <label className="block text-sm font-medium text-zinc-700">
              Remove chat icon
            </label>
            <div className="flex flex-row items-center">
              <div className="ml-2 flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 text-violet-600 accent-violet-600"
                name="should_remove_bot_profile_picture"/>
              </div>
            </div>
          </div>
          <div className="pb-8">
            <div className="flex  justify-between ">
              <label className="block text-sm font-medium text-zinc-700">
                Chat Bubble Button Color
              </label>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2">
                Reset
              </button>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="border bg-zinc-100 p-1" role="colorPicker">
                  <div className="h-5 w-5" role="colorPicker" style={{backgroundColor: 'rgb(0, 0, 0)'}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-8">
            <label className="block text-sm font-medium text-zinc-700">
              Align Chat Bubble Button
            </label>
            <select id="theme" name="theme" className="w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3   text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm">
              <option value="right">
                right
              </option>
              <option value="left">
                left
              </option>
            </select>
          </div>
          <div className="mt-1 text-sm text-zinc-700">
            Auto show initial messages pop-ups after
            <input type="number" className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 disabled:cursor-not-allowed disabled:opacity-50"
            name="auto_open_chat_window_after" value=""/>
            seconds (negative to disable)
          </div>
        </div>
        <div className="w-2/2 flex-1 lg:w-1/2">
          <div className="flex h-[85vh] max-h-[824px] flex-auto shrink-0 flex-col overflow-hidden rounded-xl border border-zinc-200  bg-zinc-100">
            <div className="flex h-full flex-auto shrink-0 flex-col overflow-hidden group cb-light bg-white">
              <div className="w-full px-3">
                <div className="z-10 flex justify-between border-b py-1 group-[.cb-dark]:border-[#3f3f46] group-[.cb-light]:border-[#f1f1f0]">
                  <div className="flex items-center">
                  </div>
                  <div className="flex items-center justify-center">
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-0 py-3 text-sm transition-transform duration-700 ease-in-out hover:rotate-180 hover:bg-inherit group-[.cb-dark]:text-zinc-300 group-[.cb-dark]:hover:text-zinc-400 group-[.cb-light]:text-zinc-700 group-[.cb-light]:hover:text-zinc-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99">
                        </path>
                      </svg>
                    </button>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 ml-3 px-0 py-3 text-sm hover:bg-inherit group-[.cb-dark]:text-zinc-300 group-[.cb-dark]:hover:text-zinc-400 group-[.cb-light]:text-zinc-700 group-[.cb-light]:hover:text-zinc-600">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                      strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="h-full overflow-auto">
                <div className="react-scroll-to-bottom--css-yfygg-79elbk h-full">
                  <div className="react-scroll-to-bottom--css-yfygg-1n7m0yu">
                    <div className="px-3 pt-4">
                      <div>
                        <div className="mr-8 flex justify-start">
                          <div className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3 group-[.cb-dark]:bg-[#3f3f46] group-[.cb-light]:bg-[#f1f1f0] group-[.cb-dark]:text-white group-[.cb-light]:text-black">
                            <div className="flex flex-col items-start gap-4 break-words">
                              <div className="prose w-full break-words text-left text-inherit dark:prose-invert">
                                <p>
                                  Hi! What can I help you with?
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="ml-8 flex justify-end">
                          <div className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3" style={{backgroundColor: 'rgb(59, 129, 246)', color: 'white'}}>
                            <div className="flex flex-col items-start gap-4 break-words dark">
                              <div className="prose w-full break-words text-left text-inherit dark:prose-invert">
                                <p>
                                  Hi
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-inherit">
                <form>
                  <div className="flex gap-2 overflow-x-auto p-3">
                  </div>
                  <div className="flex border-t px-4 py-3 group-[.cb-dark]:border-[#3f3f46] group-[.cb-light]:border-[#e4e4e7]">
                    <div className="flex w-full items-center leading-none">
                      <textarea aria-label="chat input" required="" maxlength="4000" rows="1"
                      tabindex="0" className="mr-3 max-h-36 w-full resize-none bg-transparent pr-3 leading-[24px] focus:outline-none focus:ring-0 focus-visible:ring-0 cursor-not-allowed group-[.cb-dark]:text-white group-[.cb-light]:text-black"
                      disabled="" placeholder="Message..." style={{height: '24px'}}>
                      </textarea>
                    </div>
                    <div className="flex  items-end leading-none">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50 h-9 p-1 group-[.cb-dark]:text-zinc-300 group-[.cb-light]:text-zinc-700"
                      type="submit" disabled="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        aria-hidden="true" className="h-5 w-5">
                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z">
                          </path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-4 flex pb-12" style={{justifyContent: 'flex-end'}}>
            <div className="rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              strokeWidth="2.3" stroke="white" width="24" height="24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z">
                </path>
              </svg>
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

export default ChatInterface
