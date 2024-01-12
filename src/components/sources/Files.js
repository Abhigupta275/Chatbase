import Sidebar from "./Sidebar";
import UploadFile from "./UploadFile";
import React from "react";

function Files() {
  return (
    <div>
      <Sidebar lable={"Files"}>
        <UploadFile />
      </Sidebar>
    </div>
  );
}

export default Files;
