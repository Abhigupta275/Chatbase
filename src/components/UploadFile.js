import React, { useState } from "react";
import Dropzone from "react-dropzone";

const UploadFile = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (acceptedFiles) => {
    console.log("logging drop/selected file", acceptedFiles);
    // fake request to upload file
    const url = "https://api.escuelajs.co/api/v1/files/upload";
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]); 

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setFile(acceptedFiles[0]);
        } else {
          console.error(response);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="main-container">
      <Dropzone
        onDrop={handleUpload}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
        }) => {
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`,
              })}
            >
              <input {...getInputProps()} />
              <div className="p-5">
                <div className=" flex flex-row justify-center items-center w-full p-4 border border-gray-300 h-48">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-center text-gray-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                        />
                      </svg>
                    </div>
                    <p className="text-center text-gray-500 text-md">
                      Drag & drop files here, or click to select files
                    </p>
                    <p className="text-center text-gray-500 text-sm">
                      Supported File Types: .pdf, .doc, .docx, .txt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Dropzone>
      <p className="text-center mt-3 text-gray-600">
        If you are uploading a PDF, make sure you can select/highlight the text.
      </p>
      <div className="text-center">
        <div className="border-b my-5 mx-auto w-1/4"></div>
        <p className="inline-block bg-white px-3">Attached files</p>
        <div className="border-b my-5 mx-auto w-1/4"></div>
      </div>

      {file && (
        <>
          {/* <h4>File Uploaded Successfully !!</h4> */}
          <h4 className="pl-5 pb-10">{file.name}</h4>
          {/* <img
            src={URL.createObjectURL(file)}
            className="img-container"
            alt="Uploaded file"
          /> */}
        </>
      )}
    </div>
  );
};

export default UploadFile;
