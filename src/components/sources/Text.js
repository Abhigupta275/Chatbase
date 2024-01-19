import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { TextContext } from "../../context/Text";

function Text() {
  const [textareaValue, setTextareaValue] = useState("");
  const textState = useContext((TextContext))

  console.log("context",textState)

  const handleTextareaChange = (event) => {
    textState.setText(event.target.value);
  };

  return (
    <div>
      <Sidebar lable={"Text"}>
        <div className="pl-3 pr-3 pt-6 pb-10">
          <textarea
            className="border border-gray-300 h-96 w-full rounded-lg p-3"
            value={textState.text}
            placeholder={textState.text}
            onChange={handleTextareaChange}
          />
        </div>
      </Sidebar>
    </div>
  );
}

export default Text;
