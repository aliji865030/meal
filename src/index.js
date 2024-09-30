import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SubCategory from "./component/SubCategory";
import Product from "./component/Product";
import Favorites from "./component/Favorites";
import StoreContextProvider from "./Context/StoreContext";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/subcategory/:subcategory", // :paramsName
    element: <SubCategory />,
  },
  {
    path: "/product/:productid",
    element: <Product />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StoreContextProvider>
      <RouterProvider router={routes}></RouterProvider>
    </StoreContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
