import React, { useState,useEffect } from "react";
import Sidebar from "./Sidebar";
import axios from "axios";

function Model() {
  const [instructions, setInstructions] = useState("");
  const [selectedModel, setSelectedModel] = useState("gpt-3.5-turbo");
  const [storedData, setStoredData] = useState(null);

  useEffect(()=>{
    const dataString = localStorage.getItem("modalData");
    if (dataString) {
      const storedData = JSON.parse(dataString);
      setStoredData(storedData);
      setInstructions(storedData && storedData.chatBotSettings && storedData.chatBotSettings.instructions);
      // console.log("Stored Data from localStorage:", storedData);
    }
  },[])

  function handleInstructionsChange(event) {
    setInstructions(event.target.value);
  }

  function handleModelChange(event) {
    setSelectedModel(event.target.value);
  }

  async function handleSave() {
    // console.log('data....', instructions);
    try {
      const response = await axios.put(
        "https://jellyfish-app-5tivv.ondigitalocean.app/settings/65a8c631eae71bb73a4a19c8/model",
        { instructions, model:selectedModel }
      );
  
      console.log("API Response:", response.data);
      // Assuming the response contains the updated data, update the storedData state
      setStoredData(response.data);
    } catch (error) {
      console.error("API Error:", error);
    }
  }
  

  return (
    <div>
      <Sidebar>
        <div className="col-span-12 sm:col-span-8 lg:col-span-10">
          <div className="mb-10 rounded border border-zinc-200">
            <div className="border-b border-zinc-200 bg-white px-5 py-4">
              <h3 className="text-xl font-semibold leading-6 text-zinc-900 ">
                Training
              </h3> 
            </div>
            <div className="p-5">
              <div className="pb-8">
                <label className="block text-sm font-medium text-zinc-700">
                  Last trained at
                </label>
                <div className="mt-1 font-semibold">
                  {storedData && storedData.newChatbot && storedData.newChatbot.timeStamp}
                </div>
              </div>
            </div>
            <div className="flex justify-end bg-zinc-100 px-5 py-3">
              <button
                className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-7 rounded-md px-3"
                disabled=""
              >
                Save
              </button>
            </div>
          </div>
          <div className="mb-10 rounded border border-zinc-200">
            <div className="border-b border-zinc-200 bg-white px-5 py-4">
              <h3 className="text-xl font-semibold leading-6 text-zinc-900 ">
                Model
              </h3>
            </div>
            <div className="p-5">
              <div className="pb-8">
                <div className="flex justify-between">
                  <label className="block text-sm font-medium text-zinc-700">
                    Instructions
                  </label>
                  <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-100 text-zinc-900 shadow-sm hover:bg-zinc-200/90 dark:bg-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-800/80 h-9 px-4 py-2">
                    Reset
                  </button>
                </div>
                <div className="mt-1">
                  <textarea
                    name="intructions"
                    rows="5"
                    className="w-full min-w-0  flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-zinc-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                    maxLength="6000"
                    value={instructions}
                    onChange={handleInstructionsChange}
                    
                  >
                    
                  </textarea>
                </div>
                <p className="mt-2 text-sm text-zinc-500">
                  The instructions allows you to customize your chatbot's
                  personality and style. Please make sure to experiment with the
                  instructions by making it very specific to your data and use
                  case.
                </p>
              </div>
              <div className="pb-8">
                <label className="block text-sm font-medium text-zinc-700">
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
                <p className="mt-2 text-sm text-zinc-500">
                  gpt-4 is much better at following the instructions and not
                  hallucinating, but it's slower and more expensive than
                  gpt-3.5-turbo (1 message using gpt-3.5-turbo costs 1 message
                  credit. 1 message using gpt-4 costs 20 message credits)
                </p>
              </div>
            </div>
            <div className="flex justify-end bg-zinc-100 px-5 py-3">
              <button
                className="inline-flex items-center cursor-pointer justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-80 bg-zinc-900 text-zinc-50 shadow hover:bg-zinc-800/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 h-7 rounded-md px-3"
                // disabled={instructions.trim() === ''}
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
