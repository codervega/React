import ReactDOM from "react-dom/client";
import React from "react";
let root = ReactDOM.createRoot(document.getElementById('abhi'));
const H1 = () =>(
  <h1>hi , i am Abhihske </h1>
)
const H2 = () =>(
  <h2>kahi kabhi</h2>
)
const H3 = () =>(
  <h3>d</h3>
)
const Header = ()=>(
  <div className="title">
     <h1>Abhishek</h1>
    <h2>Shukla</h2>
    <h3>thankyou</h3> 
    <H1/>
    <H2></H2>
    {H3()}
  </div>
)

const Tag = () => (
 <div id="tag">
  <a href="https://chatgpt.com/c/66dd28de-98e0-800b-bbbd-cf4d4d10ae63" target="_blank" >ChatGPT</a><br></br>
  <img src="https://th.bing.com/th/id/OIP.kuVLei2FXzTfLgVJO9V4bgHaE8?rs=1&pid=ImgDetMain"></img><br></br>
  <input type="Text" placeholder="Enter Your name "></input>
  <form></form>
 </div>
);

let Search = ()=>(
  <form>
    <input type="seach" placeholder="enter what u want to seach"></input>
  </form>
);
const Headerl = () =>(
 <div className="head">
  <img src="https://th.bing.com/th/id/OIP.HJRyzVPoH0q4QHPVfSK2zAHaE8?rs=1&pid=ImgDetMain" alt="lnjdb" height="40px"></img>
  <Search></Search>
  <img src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?rs=1&pid=ImgDetMain" alt="lnjdb" height="40px"></img>

 </div>
);

root.render(<Headerl/>);