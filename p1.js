import React from "react";
import ReactDOM from "react-dom"
let root = ReactDOM.createRoot(document.getElementById("abhi"));


let structure = React.createElement("div",{id:'parent'},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"hello i am bangalore"),React.createElement("h1",{},"hello i am bangalore  😒😒😒😒😒😒😒😒😒😒")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"hello i am bangalore"),React.createElement("h1",{},"hello i am bangalore")])]);

root.render(structure);