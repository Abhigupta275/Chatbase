import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import axios from "axios";

function Sidebar() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  const [storedData, setStoredData] = useState(null);

  useEffect(()=>{
    const dataString = localStorage.getItem("modalData");

    if (dataString) {
      const storedData = JSON.parse(dataString);
      setStoredData(storedData.newChatbot);
      // console.log("Stored Data from localStorage:", storedData);
    }
  },[])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://jellyfish-app-5tivv.ondigitalocean.app/chatbots/${id}`, {
          withCredentials: true,
        });
        console.log("new res...", response.data);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <section>
        <div className="mx-auto mt-10 flex max-w-4xl flex-col px-3 pb-12 md:mt-14">
          <div className="mb-10 rounded border border-zinc-200">
            <div className="border-b border-zinc-200 bg-white px-5 py-4">
              <h3 className="text-xl font-semibold leading-6 text-zinc-900 ">
              {(data && data.chatbot_name) || (storedData && storedData.chatbot_name)}
              </h3>
            </div>
            <div className="p-5">
              <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:space-x-2 md:space-y-0">
                <div className="w-full">
                  <div className="">
                    <div className="flex justify-between pb-4">
                      <div>
                        <label className="block text-sm font-medium text-zinc-500">
                          Chatbot ID
                        </label>
                        <div className="flex items-center space-x-4">
                          <div className="text-sm font-semibold text-zinc-700">
                            {(data && data._id) || (storedData && storedData._id)}
                          </div>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 h-9 p-0">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-4 w-4"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-end">
                          <button
                            className="items-center justify-center whitespace-nowrap rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50 h-9 px-4 py-2 md:text-md flex gap-2 text-sm"
                            data-state="closed"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              aria-hidden="true"
                              className="h-5 w-5 text-violet-500"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 pb-4">
                      <div className="col-span-6">
                        <label className="block text-sm font-medium text-zinc-500">
                          Status
                        </label>
                        <div className="text-sm font-semibold text-zinc-700">
                          <span className="mr-1 inline-block h-[10px] w-[10px] rounded-full bg-teal-400"></span>
                          {(data && data.status) || (storedData && storedData.status )}
                        </div>
                      </div>
                      <div className="col-span-6">
                        <label className="block text-sm font-medium text-zinc-500">
                          Model
                        </label>
                        <div className="text-sm font-semibold text-zinc-700">
                          gpt-3.5-turbo
                        </div>
                      </div>
                    </div>
                    <div className="pb-4">
                      <label className="block text-sm font-medium text-zinc-500">
                        Number of characters
                      </label>
                      <div className="text-sm font-semibold text-zinc-700">
                        {data && data.number_of_characters}
                      </div>
                    </div>
                    <div className="pb-4">
                      <label className="block text-sm font-medium text-zinc-500">
                        Visiblity
                      </label>
                      <div className="text-sm font-semibold text-zinc-700">
                      {(data && data.visibilty) || (storedData && storedData.visibilty)}
                      </div>
                    </div>
                    <div className="pb-4">
                      <label className="block text-sm font-medium text-zinc-500">
                        Temperature
                      </label>
                      <div className="w-1/2 rounded-full ">
                        <p className="text-xs font-semibold text-zinc-700">0</p>
                        <input
                          id="chatbot-overview-temp-steps-range"
                          type="range"
                          min="0"
                          max="1"
                          step="0.1"
                          className="h-2 w-full appearance-none rounded-lg bg-zinc-200 accent-violet-700 dark:bg-zinc-700"
                          value="0"
                        />
                      </div>
                    </div>
                    <div className="pb-4">
                      <label className="block text-sm font-medium text-zinc-500">
                        Last trained at
                      </label>
                      <div className="text-sm font-semibold text-zinc-700">
                      {(data && data.timeStamp) || (storedData && storedData.timeStamp)}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="h-[85vh] max-h-[824px] w-full overflow-hidden rounded-xl border-[1px] border-zinc-300 md:w-[448px]">
                    <div className="flex h-full flex-auto shrink-0 flex-col overflow-hidden group cb-light bg-white">
                      <div className="w-full px-3">
                        <div className="z-10 flex justify-between border-b py-1 group-[.cb-dark]:border-[#3f3f46] group-[.cb-light]:border-[#f1f1f0]">
                          <div className="flex items-center"></div>
                          <div className="flex items-center justify-center">
                            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 px-0 py-3 text-sm transition-transform duration-700 ease-in-out hover:rotate-180 hover:bg-inherit group-[.cb-dark]:text-zinc-300 group-[.cb-dark]:hover:text-zinc-400 group-[.cb-light]:text-zinc-700 group-[.cb-light]:hover:text-zinc-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-5 w-5"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="h-full overflow-auto">
                        <div className="react-scroll-to-bottom--css-mcfye-79elbk h-full">
                          <div className="react-scroll-to-bottom--css-mcfye-1n7m0yu">
                            <div className="px-3 pt-4">
                              <div>
                                <div className="mr-8 flex justify-start">
                                  <div className="mb-3 max-w-prose overflow-auto rounded-lg px-4 py-3 group-[.cb-dark]:bg-[#3f3f46] group-[.cb-light]:bg-[#f1f1f0] group-[.cb-dark]:text-white group-[.cb-light]:text-black">
                                    <div className="flex flex-col items-start gap-4 break-words">
                                      <div className="prose w-full break-words text-left text-inherit dark:prose-invert">
                                        <p>{(data && data.suggested_messages) || (storedData && storedData.suggested_messages)}</p>
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
                          <div className="flex gap-2 overflow-x-auto p-3"></div>
                          <div className="flex border-t px-4 py-3 group-[.cb-dark]:border-[#3f3f46] group-[.cb-light]:border-[#e4e4e7]">
                            <div className="flex w-full items-center leading-none">
                              <textarea
                                aria-label="chat input"
                                required=""
                                maxLength="4000"
                                rows="1"
                                tabIndex="0"
                                className="mr-3 max-h-36 w-full resize-none bg-transparent pr-3 leading-[24px] focus:outline-none focus:ring-0 focus-visible:ring-0 group-[.cb-dark]:text-white group-[.cb-light]:text-black"
                                placeholder="Message..."
                                style={{ height: "24px" }}
                              ></textarea>
                            </div>
                            <div className="flex  items-end leading-none">
                              <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 text-zinc-900 underline-offset-4 hover:underline dark:text-zinc-50 h-9 p-1 group-[.cb-dark]:text-zinc-300 group-[.cb-light]:text-zinc-700"
                                type="submit"
                                disabled=""
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                  fill="currentColor"
                                  aria-hidden="true"
                                  className="h-5 w-5"
                                >
                                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
