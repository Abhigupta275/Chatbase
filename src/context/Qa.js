import { createContext, useState } from "react";

export const QaContext = createContext(null);

export const QaProvider = (props) => {
  const [question, setQuestion] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [sections, setSections] = useState([]); 

  return (
    <QaContext.Provider value={{ question, setQuestion, answer, setAnswer, sections, setSections }}>
      {props.children}
    </QaContext.Provider>
  );
};
