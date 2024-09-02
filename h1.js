// let element = React.createElement(
//   "h1",
//   {id :"heading"},
//   "Hello World From React!");
let root = ReactDOM.createRoot(document.getElementById("abhi"));
// root.render(element);

// let strcture = React.createElement("div",{id:"parent"},
//   React.createElement("div",{id:"child"},
//     React.createElement("h1",{id:"child"},
//     "hello this is <h1>..</h1>  in div inside div")
// ));

let structure = React.createElement("div",{id:'parent'},[React.createElement("div",{id:"child1"},[React.createElement("h1",{},"hello i am bangalore"),React.createElement("h1",{},"hello i am bangalore")]),React.createElement("div",{id:"child2"},[React.createElement("h1",{},"hello i am bangalore"),React.createElement("h1",{},"hello i am bangalore")])]);
root.render(structure);