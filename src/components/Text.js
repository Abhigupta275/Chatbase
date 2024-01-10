import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Text() {
  const [textareaValue, setTextareaValue] = useState("");

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div>
      <Sidebar lable={"Text"}>
        <div className="pl-3 pr-3 pt-6 pb-10">
          <textarea
            className="border border-gray-300 h-96 w-full rounded-lg p-3"
            value={textareaValue}
            placeholder="data"
            onChange={handleTextareaChange}
          />
        </div>
      </Sidebar>
    </div>
  );
}

export default Text;
