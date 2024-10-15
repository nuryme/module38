import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Todo from "./Todo";
import Actor from "./Actor";
import Singers from "./Singers";

function App() {  //one component
  const actors = ['Sakib', 'Shoriful Raj', 'Jasim', 'Rubel', 'Salman Shah']

  const singers = [  
    {name: 'Dr. Mahfuzur Rahman', age: 68},  
    {name: 'Eva Rahman', age: 38},  
    {name: 'Shuvro Dev', age: 58},  
    {name: 'Pritom', age: 28},  
  ]

  return (
    <>
      <h1>Vite + React</h1>
      <Device name="Laptop" price="55"></Device>
      <Device name="Mobile" price="66"></Device>
      <Device name="Watch" price="77"></Device>
      <Person></Person>
      <Person></Person>

      <div className="student">
        <h2>This is a student</h2>
        <Students name="nur" age="20"></Students>
        <Students name="nahar"></Students>
        <Students age={40}></Students>
      </div>

      <Developer></Developer>
      <div className="container">
        <h2>Exported from another jsx file</h2>
        <h4>Conditional Rendering</h4>
        <ul
          style={{
            textAlign: "left",
          }}
        >
          <Todo task="learn react" isDone={false}></Todo>
          <Todo task="learn html" isDone={true}></Todo>
          <Todo task="learn mango bd" isDone={false}></Todo>
        </ul>
      </div>

      <div className="container" style={{
        backgroundColor: 'lightblue'
      }}>
          <h2>another from file</h2>
          <h4>Array maping</h4>
          <ul
          style={{
            textAlign: "left",
          }}
        >
          {actors.map(actor => <Actor name= {actor}></Actor>)}
        </ul>
      </div>

      <div className="container" style={{
        backgroundColor: 'lightcyan'
      }}>
          <h2>another from file</h2>
          <h4>Object maping</h4>
          <ul
          style={{
            textAlign: "left",
          }}
        >
          {
            singers.map(singer => <Singers name={singer.name} age={singer.age}></Singers>)
          }
        </ul>
      </div>
    </>
  );
}

function Person() {   //another component
  const age = 30;
  const money = 20;
  const person = { name: "me", age: 20 };
  return (
    <h3>
      I am {person.name}! and age: {age + money}m
    </h3>
  );
}

function Students({ name = "unknown", age = 0 }) {
  // return <div>   //line break na korle () use korte hoy na
  //   <h2>This is a student</h2>
  //   <p>Name: </p>
  //   <p>Age: </p>
  // </div>
  // const {name, age} = props
  return (
    //line break korle () use na korle kichui return korbe na

    //**  ---------- Styling ----------- */
    <div>
      <p>Name: {name} </p>
      <p>Age: {age} </p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "30px",
    backgroundColor: "lightgreen",
  };

  return (
    <div style={developerStyle}>
      <h4>Devo devo</h4>
      <p>Coding: </p>
    </div>
  );
}

function Device(props) {
  // console.log(props)

  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "1px solid green",
      }}
    >
      <p
        style={{
          color: "red",
          fontSize: "18px",
        }}
      >
        device: {props.name}. price: {props.price}{" "}
      </p>
    </div>
  );
}

export default App;
