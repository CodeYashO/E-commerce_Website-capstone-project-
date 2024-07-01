import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/usercontext";
import { CategoriesProvider } from "./contexts/categoriesContext";
import { CartProvider } from "./contexts/cartContext";
import { Googleprovider } from "./contexts/googleContext";
import { ContentProvider } from "./contexts/cartInsideContext";
import { InsideContentProvider } from "./contexts/InsideContentContext";
import { TitleProvider } from "./contexts/titleContext";
import { ParamProvider } from "./contexts/paramcontext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ParamProvider>
        <TitleProvider>
          <CategoriesProvider>
            <Googleprovider>
              <UserProvider>
                <ContentProvider>
                  <CartProvider>
                    <App />
                  </CartProvider>
                </ContentProvider>
              </UserProvider>
            </Googleprovider>
          </CategoriesProvider>
        </TitleProvider>
      </ParamProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
