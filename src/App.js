import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext } from 'react';

function App(props){

  let [age, setAge]= useState(18);
  let [siblingsNum, setSiblingsNum]=useState(10);

  let [objState, setObjState]= useState({

     age: 19,
     sibling: 4

  })

  const [count, setCount]=useState(0);

  const [ageTitle, setAgeTitle]=useState(0);

  const ThemeContext=React.createContext('light');

  const Display = () => {
    const theme = useContext(ThemeContext);
    return <div 
           style={{
           background: theme === 'dark' ? 'black' : 'papayawhip',
           color: theme === 'dark' ? 'white' : 'palevioletred',
           width: '800px',
           minHeight: '200px'
           }}
       >
           {'The theme here is ' + theme}
       </div>
   }
   
   let changeAge= ()=>{
        setObjState(prev=>{
         return {...prev, age : objState.age+1} 
        });
    }

    let changeSiblings=()=>{
      setObjState(prev=>{
          return {...prev, sibling : objState.sibling+1}
      });
    }


    let resetCount=()=>{
        setCount(0);
    }

    let changeInc=()=>{
      setCount(prev=>prev+=1)
    }

    let changeDec=()=>{
      setCount(prev=>prev-=1)
    }


    useEffect( ()=>{

       document.title="You are "+ageTitle+" years old!";

        console.log("useEffect function called ");


    },[ageTitle])


    let changeTitle=()=>{
        setAgeTitle(ageTitle+1);
    }

   
   
   
   
   
   return <>
      <div className='container'>
        
        <div className='Progression1and2'>
       <h1>Today I am {age} Years of Age</h1>
      <h1>I have {siblingsNum} siblings</h1>
     <span><button onClick={(event)=>{setAge(age+1)}}>Get older!</button>&emsp;&emsp;
     <button onClick={(event)=>{setSiblingsNum(siblingsNum+1)}}>More siblings!</button>
     <label id="info">Progression 1 and 2</label>
     </span>
        </div>
    <div className='Progression3'>
       <h1>Today I am {objState.age} Years of Age</h1>
      <h1>I have {objState.sibling} siblings</h1>
     <span><button onClick={changeAge}>Get older!</button>&emsp;&emsp;
     <button onClick={changeSiblings}>More siblings!</button>
     <label id="info">Progression 3</label>
     </span>
        </div>
        
      <div className='Progression4'>
       <h1>Count value is : {count}</h1>
     <span><button onClick={resetCount}>Reset</button>&emsp;
     <button onClick={changeInc}>Plus (+)</button>&emsp;
     <button onClick={changeDec}>Minus (-)</button>
     <label id="info">Progression 4</label>
     </span>
        </div>

        <div className='Progression5'>
       <h1>Look at the title of the current tab in your browser</h1>
     <span><button onClick={changeTitle}>Update Title!!</button>
     <label id="info">Progression 5</label>
     </span>
        </div>

        <div className='Progression6'>
        {Display()}
     <span>
     <label id="info">Progression 6</label>
     </span>
        </div>

  </div>

    </>
   }
export {App}