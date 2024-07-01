import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export let TitleContext = createContext({
  Title: "",
  addTitle: () => {},
});

export const TitleProvider = ({ children }) => {
  let [Title, setTitle] = useState("");
  let Navigate = useNavigate();

  const addTitle = (titleToAdd) => {
    let title = titleToAdd.target.textContent;
    setTitle(title);
    console.log(Title);
    Navigate(`/shop/${title}`);
  };

  let value = { Title, addTitle };
  return (
    <TitleContext.Provider value={value}>{children}</TitleContext.Provider>
  );
};
