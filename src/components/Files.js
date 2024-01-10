import UploadFile from "./UploadFile";
import React from "react";
import Sidebar from "./Sidebar";

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
