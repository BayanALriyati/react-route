import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";


function Todo() { 
  const [inputList , setInputList] =useState("");
  const [Items ,setItems] = useState([]);
  const itemEvent =(event)=>{
    setInputList(event.target.value)
  }

  const okEvent =(event)=>{

    setItems((oldItems)=>{
      if (itemEvent !== ('')){
      return [...oldItems , inputList];
      return itemEvent('');
    }
  });
};
    return(
       <>
    <div className="main_div">
      <div className="center_div">
       <br/>
       <h1>Todo Page</h1>
       <br/>
       <input type="text" placeholder="Add" value={inputList} onChange={itemEvent}/>
       <button className="buttonTo" onClick={okEvent}> + </button>
       <ol>
        {/* <li>{inputList}</li> */}
        {Items.map((ele)=>{
          return <li>{ele}</li>
        })}
       </ol>
      </div>
    </div>
       </>
    );
  }


export default Todo;