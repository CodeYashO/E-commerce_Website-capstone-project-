import { useState } from "react";
import { createContext } from "react";

export let ContentContext = createContext({
  content: [],
  setcontent: () => {},
});

export const ContentProvider = ({ children }) => {
  let [content, setcontent] = useState([]);
  console.log(content);
  let value = { content, setcontent };
  return (
    <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
  );
};
