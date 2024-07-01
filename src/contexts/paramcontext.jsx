import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const ParamContext = createContext({
  Param: "",
  addToParam: () => {},
});

export const ParamProvider = ({ children }) => {
  const [Param, setParam] = useState("");
  let Navigate = useNavigate();

  let addToParam = (e) => {
    let param = e.target.closest("div").firstElementChild.textContent;
    setParam(param);
    Navigate(`/shop/${param}`);
  };

  let value = { Param, addToParam };
  return (
    <ParamContext.Provider value={value}>{children}</ParamContext.Provider>
  );
};
