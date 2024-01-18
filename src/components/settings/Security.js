import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

function Security() {
  const [isChecked, setIsChecked] = useState(false);
  const [ipLimit, setIpLimit] = useState(20);
  const [ipLimitTimeframe, setIpLimitTimeframe] = useState(240);
  const [ipLimitMessage, setIpLimitMessage] = useState(
    "Too many messages in a row"
  );
  const [visibility, setVisibility] = useState("private"); // Default visibility

  const handleToggle = () => {
    setIsChecked((prev) => !prev);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "ip_limit") {
      setIpLimit(value);
    } else if (name === "ip_limit_timeframe") {
      setIpLimitTimeframe(value);
    } else if (name === "ip_limit_message") {
      setIpLimitMessage(value);
    } else if (name === "visibility") {
      setVisibility(value);
    }
  };

  const handleSave = async () => {
    try {
      const response = await axios.put(
        "https://jellyfish-app-5tivv.ondigitalocean.app/settings/65a8c631eae71bb73a4a19c8/security",
        {
          visibilty: visibility,
          domains: isChecked
            ? document.getElementsByName("domains")[0].value
            : "",
          limit_to_only: ipLimit,
          messages_every: ipLimitTimeframe,
          Show_this_message_to_show_when_limit_is_hit: ipLimitMessage,
        },
        { withCredentials: true }
      );

      // Handle the response as needed
    //   console.log("API response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("API error:", error);
    }
  };

  return (
    <div>
      <Sidebar>
        <div class="col-span-12 sm:col-span-8 lg:col-span-10">
          <div class="mb-10 rounded border border-zinc-200">
            <div class="border-b border-zinc-200 bg-white px-5 py-4">
              <h3 class="text-xl font-semibold leading-6 text-zinc-900 ">
                Security
              </h3>
            </div>
            <div class="p-5">
              <div class="pb-8">
                <label class="block text-sm font-medium text-zinc-700">
                  Visibilty
                </label>
                <select
                  name="visibility"
                  value={visibility}
                  onChange={handleInputChange}
                  class="w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                >
                  <option value="private">private</option>
                  <option value="public">public</option>
                </select>
                <p class="mt-2 text-sm text-zinc-500">
                  'private': No one can access your chatbot except you (your
                  account)
                </p>
                <p class="mt-2 text-sm text-zinc-500">
                  'public': Other people can chat with your chatbot if you send
                  them the link. You can also embed it on your website so your
                  website visitors are able to use it.
                </p>
              </div>
              <div class="pb-2">
                <div>
                  <label class="block pb-2 text-sm font-medium text-zinc-700">
                    Only allow the iframe and widget on specific domains
                  </label>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={isChecked}
                    data-state={isChecked ? "checked" : "unchecked"}
                    value={isChecked ? "on" : "off"}
                    className="peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-violet-500 data-[state=unchecked]:bg-zinc-200 dark:focus-visible:ring-zinc-300 dark:focus-visible:ring-offset-zinc-950 dark:data-[state=checked]:bg-zinc-50 dark:data-[state=unchecked]:bg-zinc-800"
                    onClick={handleToggle}
                  >
                    <span
                      data-state={isChecked ? "checked" : "unchecked"}
                      className={`pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform ${
                        isChecked ? "translate-x-5" : "translate-x-0"
                      } dark:bg-zinc-950`}
                    ></span>
                  </button>
                </div>
              </div>
              <div class="py-4">
                {isChecked && (
                  <div>
                    <label class="block text-sm font-medium text-zinc-700">
                      Domains
                    </label>
                    <div class="mt-1">
                      <textarea
                        name="domains"
                        placeholder="example.com"
                        class="w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3  text-zinc-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                        maxLength="400"
                      ></textarea>
                      <p class="mt-2 text-sm text-zinc-500">
                        Enter each domain on a new line
                      </p>
                      <p class="mt-2 text-sm text-zinc-500">
                        Domains you want to embed your chatbot on. Your chatbot
                        visibility has to be 'public' for this to work.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div class="flex justify-between">
                  <label class="block text-sm font-medium text-zinc-700">
                    Rate Limiting
                  </label>
                  <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2">
                    Reset
                  </button>
                </div>
                <p class="mt-2 text-sm text-zinc-500">
                  Limit the number of messages sent from one device on the
                  iframe and chat bubble (this limit will not be applied to you
                  on chatbase.co, only on your website for your users to prevent
                  abuse).
                </p>
                <div class="mt-1 text-sm text-zinc-700">
                  Limit to only
                  <input
                    type="number"
                    class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 inline h-8 w-20"
                    name="ip_limit"
                    value={ipLimit}
                    onChange={handleInputChange}
                  />
                  messages every
                  <input
                    type="number"
                    class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 inline h-8 w-20"
                    name="ip_limit_timeframe"
                    value={ipLimitTimeframe}
                    onChange={handleInputChange}
                  />
                  seconds.
                </div>
                <div class="my-4 text-sm text-zinc-700">
                  Show this message to show when limit is hit
                  <input
                    class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-9 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10"
                    name="ip_limit_message"
                    value={ipLimitMessage}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div class="flex justify-end bg-zinc-100 px-5 py-3">
              <button
                onClick={handleSave}
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-7 rounded-md px-3"
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

export default Security;
