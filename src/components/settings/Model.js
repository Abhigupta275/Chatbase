import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Model() {
  const [instructions, setInstructions] = useState("");
  const [selectedModel, setSelectedModel] = useState("gpt-3.5-turbo");

  function handleInstructionsChange(event) {
    setInstructions(event.target.value);
  }

  function handleModelChange(event) {
    setSelectedModel(event.target.value);
  }

  async function handleSave() {
    console.log('data....',instructions,selectedModel)
    // try {
    //   const response = await axios.post("your-api-endpoint", {
    //     instructions,
    //     selectedModel,
    //   });

    //   console.log("API Response:", response.data);
    // } catch (error) {
    //   console.error("API Error:", error);
    // }
  }

  return (
    <div>
      <Sidebar>
        <div class="col-span-12 sm:col-span-8 lg:col-span-10">
          <div class="mb-10 rounded border border-zinc-200">
            <div class="border-b border-zinc-200 bg-white px-5 py-4">
              <h3 class="text-xl font-semibold leading-6 text-zinc-900 ">
                Training
              </h3>
            </div>
            <div class="p-5">
              <div class="pb-8">
                <label class="block text-sm font-medium text-zinc-700">
                  Last trained at
                </label>
                <div class="mt-1 font-semibold">
                  January 11, 2024 at 10:59 AM
                </div>
              </div>
            </div>
            <div class="flex justify-end bg-zinc-100 px-5 py-3">
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-7 rounded-md px-3"
                disabled=""
              >
                Save
              </button>
            </div>
          </div>
          <div class="mb-10 rounded border border-zinc-200">
            <div class="border-b border-zinc-200 bg-white px-5 py-4">
              <h3 class="text-xl font-semibold leading-6 text-zinc-900 ">
                Model
              </h3>
            </div>
            <div class="p-5">
              <div class="pb-8">
                <div class="flex justify-between">
                  <label class="block text-sm font-medium text-zinc-700">
                    Instructions
                  </label>
                  <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2">
                    Reset
                  </button>
                </div>
                <div class="mt-1">
                  <textarea
                    name="intructions"
                    rows="5"
                    className="w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                    maxlength="6000"
                    value={instructions}
                    onChange={handleInstructionsChange}
                  >
                    I want you to act as a support agent. Your name is "AI
                    Assistant". You will provide me with answers from the given
                    info. If the answer is not included, say exactly "Hmm, I am
                    not sure." and stop after that. Refuse to answer any
                    question not about the info. Never break character.
                  </textarea>
                </div>
                <p class="mt-2 text-sm text-zinc-500">
                  The instructions allows you to customize your chatbot's
                  personality and style. Please make sure to experiment with the
                  instructions by making it very specific to your data and use
                  case.
                </p>
              </div>
              <div class="pb-8">
                <label class="block text-sm font-medium text-zinc-700">
                  Model
                </label>
                <select
                  id="model"
                  name="model"
                  className="w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                  value={selectedModel}
                  onChange={handleModelChange}
                >
                  <option value="gpt-3.5-turbo">gpt-3.5-turbo</option>
                  <option value="gpt-4" disabled="">
                    gpt-4
                  </option>
                </select>
                <p class="mt-2 text-sm text-zinc-500">
                  gpt-4 is much better at following the instructions and not
                  hallucinating, but it's slower and more expensive than
                  gpt-3.5-turbo (1 message using gpt-3.5-turbo costs 1 message
                  credit. 1 message using gpt-4 costs 20 message credits)
                </p>
              </div>
              {/* <div>
        <label class="block text-sm font-medium text-zinc-700">
          Temperature
        </label>
        <p class="text-sm">
          0
        </p>
        <input id="steps-range" type="range" min="0" max="1" step="0.1" class="h-2 w-full cursor-pointer appearance-none rounded-lg bg-zinc-200  accent-violet-700 dark:bg-zinc-700"
        value="0" />
        <div class="flex justify-between">
          <p class="text-xs text-zinc-700">
            Reserved
          </p>
          <p class="text-xs text-zinc-700">
            Creative
          </p>
        </div>
      </div> */}
            </div>
            <div class="flex justify-end bg-zinc-100 px-5 py-3">
              <button
                class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-7 rounded-md px-3"
                disabled={instructions.trim() === ''}
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

export default Model;
