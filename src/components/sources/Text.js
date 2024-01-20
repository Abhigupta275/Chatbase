import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { TextContext } from "../../context/Text";

function Text() {
  const {text, setText} = useContext(TextContext)

  const handleTextareaChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <Sidebar lable={"Text"}>
        <div className="pl-3 pr-3 pt-6 pb-10">
          <textarea
            className="border border-gray-300 h-96 w-full rounded-lg p-3"
            value={text}
            placeholder={text}
            onChange={handleTextareaChange}
          />
        </div>
      </Sidebar>
    </div>
  );
}

export default Text;
