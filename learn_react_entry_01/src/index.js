import React from "react";
import ReactDOM from "react-dom/client";

// import App from './App';
import App1 from "../src/view/01_创建和嵌套组件/App";
import App2 from "../src/view/02_使用jsx编写react/App";
import App3 from "../src/view/03_井字棋/App";
import App4 from "../src/view/04_react案例/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App1 />
    <App2 />
    <App3 />
    <App4 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
