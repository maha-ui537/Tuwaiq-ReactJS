import React from 'react'
import { useRef, useState, useEffect } from "react";import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Tuwaiq from './components/Tuwaiq';
import ProductsApi from './components/product.api';
import APIExchange from './components/APIExchange';

function App() {

function welcome(){
  return <h1 className='alert alert-danger'>Welcome to my Website</h1>;
}

const Iref=useRef();

const imgRef = useRef(null);

  function ActiveFocsus()
  {
    Iref.current.focus();
  }

const handleResize = (e) => {
  imgRef.current.style.width = `${e.target.value}px`;
};

const Message="Hello, This is Maha Mazroai";


const studentlist2=[  
 {id:"1" , name:"Mohammed" ,Majore:"Computer Science" , age:22},
 {id:"2" , name:"Ahmed" ,Majore:"Mathematics" , age:21},
 {id:"3" , name:"Samer" ,Majore:"Physics" , age:22},
 {id:"4" , name:"khaled" ,Majore:"Chemistry" , age:23},
 ]


const [counter, setCounter] = useState(0);

const handleCounter = () => {
  setCounter(counter + 1);
  console.log(counter);
};


useEffect(() => {
  console.log("Effect is updated");
},[counter]);



  return (
    <>

<Header /> 

  <div> {welcome()} </div>

  <input type="text" className="form-control" placeholder="Enter your name" ref={Iref} />

  <button className="btn btn-primary mt-3" onClick={ActiveFocsus}>Active </button>

  <Tuwaiq 
          student={studentlist2}
                   msg={Message} />

    <div>
      <Student name="Ahmed" />
      <Student name="Ali" />
      <Student name="Sara" />
    </div>

<div className="m-3 text-center">
  <img
    ref={imgRef}
    src="/Image/Thinks.jpg"
    alt="صورة"
    style={{ width: "200px" }}
  />
</div>

<div className="m-3 w-50 mx-auto">
  <input
    type="range"
    className="form-range"
    min="50"
    max="400"
    defaultValue="200"
    onChange={handleResize}
  />
</div>

<button className="btn btn-primary m-3" onClick={handleCounter}>Increment</button>
<p>{counter}</p>


<br /> <br />

<APIExchange />
<br /> <br /> <br /> <br />
<ProductsApi />


         {/*<Footer />*/} 

  </>
  )
}

export default App