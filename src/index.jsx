import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

ReactDOM.render(
    <BrowserRouter>
        <App/>
        <link rel="preload" href="https://i.ibb.co/PNB09Q6/a.png" as="image"/>\
        <link rel="preload" href="https://i.ibb.co/PCHKM27/a.png" as="image"/>\
        <link rel="preload" href="https://i.ibb.co/YL9kf8p/background-min.jpg" as="image"/>\
        <link rel="preload" href="https://i.ibb.co/9wtFQFx/avatar.png" as="image"/>\
        <link rel="preload" href="https://i.ibb.co/wrXwd10/streetkombat.png" as="image"/>
        <link rel="preload" href="https://i.ibb.co/8PsSs0G/thumb-thingstodosjsu.png" as="image"/>
        <link rel="preload" href="https://i.ibb.co/dcxX94S/thumb-typetester.png" as="image"/>
        <link rel="preload" href="https://i.ibb.co/BfZSxty/Untitled.png" as="image"/>      
    </BrowserRouter>
, document.getElementById("root"));
