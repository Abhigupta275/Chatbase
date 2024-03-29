import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

function Sidebar({ children }) {
  const { id } = useParams();

  const initialTab = window.location.pathname.includes("/settings/general")
    ? "general"
    : window.location.pathname.includes("/settings/model")
    ? "model"
    : window.location.pathname.includes("/settings/chatinterface")
    ? "chatinterface"
    : window.location.pathname.includes("/settings/leads")
    ? "leads"
    : window.location.pathname.includes("/settings/security")
    ? "security"
    : "general";
  const [selectedTab, setSelectedTab] = useState(initialTab);
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jellyfish-app-5tivv.ondigitalocean.app/chatbots/"
        );
        console.log("new res...", response.data[0].status);
        setData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      <section>
        <div className="mx-auto flex max-w-7xl flex-row justify-between px-4 mb-6">
          <h4 className=" text-3xl font-bold">Settings</h4>
        </div>
        <div className="max-w-7xl px-4 lg:mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 sm:col-span-4 lg:col-span-2">
              <div>
                <div className="md:hidden">
                  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-6 items-center justify-end sm:hidden">
                      <div className="left-100 absolute inset-y-0 flex items-center sm:hidden">
                        <button
                          type="button"
                          id="radix-:rp0:"
                          aria-haspopup="menu"
                          aria-expanded="false"
                          data-state="closed"
                          className="inline-flex items-center justify-center rounded-md p-2 text-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        >
                          <span className="sr-only">Open main menu</span>
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
                            className="lucide lucide-menu block h-6 w-6"
                            aria-hidden="true"
                          >
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden grow flex-col gap-y-5 overflow-y-auto border-zinc-200  bg-white sm:flex ">
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col">
                      <li>
                        <ul role="list" className="space-y-1">
                          <Link to={`/chatbot/${id}/settings/general`}>
                            <li>
                              <button
                                onClick={() => setSelectedTab("general")}
                                className={`items-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 text-zinc-700 hover:bg-zinc-50 hover:text-violet-600 group flex w-full place-items-start justify-start gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold leading-6 ${
                                  selectedTab === "general" &&
                                  "text-violet-600 bg-zinc-200 hover:bg-zinc-200"
                                }`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="text-violet-600 h-6 w-6 shrink-0"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                  ></path>
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  ></path>
                                </svg>
                                General
                              </button>
                            </li>
                          </Link>
                          <Link to={`/chatbot/${id}/settings/model`}>
                            <li>
                              <button
                                onClick={() => setSelectedTab("model")}
                                className={`items-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 text-zinc-700 hover:bg-zinc-50 hover:text-violet-600 group flex w-full place-items-start justify-start gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold leading-6 ${
                                  selectedTab === "model" &&
                                  "text-violet-600 bg-zinc-200 hover:bg-zinc-200"
                                }`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="text-zinc-400 group-hover:text-violet-600 h-6 w-6 shrink-0"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                  ></path>
                                </svg>
                                Model
                              </button>
                            </li>
                          </Link>
                          <Link to={`/chatbot/${id}/settings/chatinterface`}>
                            <li>
                              <button
                                onClick={() => setSelectedTab("chatinterface")}
                                className={`items-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 text-zinc-700 hover:bg-zinc-50 hover:text-violet-600 group flex w-full place-items-start justify-start gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold leading-6 ${
                                  selectedTab === "chatinterface" &&
                                  "text-violet-600 bg-zinc-200 hover:bg-zinc-200"
                                }`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="text-zinc-400 group-hover:text-violet-600 h-6 w-6 shrink-0"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                                  ></path>
                                </svg>
                                Chat Interface
                              </button>
                            </li>
                          </Link>
                          <Link to={`/chatbot/${id}/settings/leads`}>
                            <li>
                              <button
                                onClick={() => setSelectedTab("leads")}
                                className={`items-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 text-zinc-700 hover:bg-zinc-50 hover:text-violet-600 group flex w-full place-items-start justify-start gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold leading-6 ${
                                  selectedTab === "leads" &&
                                  "text-violet-600 bg-zinc-200 hover:bg-zinc-200"
                                }`}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="text-zinc-400 group-hover:text-violet-600 h-6 w-6 shrink-0"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                  ></path>
                                </svg>
                                Leads
                              </button>
                            </li>
                          </Link>
                          <Link to={`/chatbot/${id}/settings/security`}>
                            <li>
                              <button
                                onClick={() => setSelectedTab("security")}
                                className={`items-center transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 h-9 text-zinc-700 hover:bg-zinc-50 hover:text-violet-600 group flex w-full place-items-start justify-start gap-x-3 whitespace-nowrap rounded-md p-2 text-sm font-semibold leading-6 ${
                                  selectedTab === "security" &&
                                  "text-violet-600 bg-zinc-200 hover:bg-zinc-200"
                                }`}
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
                                    d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                                  ></path>
                                </svg>
                                Security
                              </button>
                            </li>
                          </Link>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sidebar;
