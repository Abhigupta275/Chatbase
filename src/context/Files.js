import { createContext, useState } from "react";

export const FilesContext = createContext(null);

export const FilesProvider = (props) => {
  const [files, setFiles] = useState([]);
  return (
    <FilesContext.Provider value={{ files, setFiles }}>
      {props.children}
    </FilesContext.Provider>
  );
};
