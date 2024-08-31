import React from "react";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Button from "./components/Button";
import Counter from "./components/Counter";
import "./style.css"

const App = () =>{

   return(
         
    <div className="todo-container">
      <Counter/>
      <Header/>
      <ListItem text="Eat" />
      <ListItem text="code" />
      <ListItem text="Play" />
      <ListItem text="sleep" />
      <Button/>
    </div>

   );

};
export default App;