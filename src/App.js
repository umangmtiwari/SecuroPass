import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { SC,UC,LC,NC } from './data/PassChar';

function App() {

  let [uppercase,setUppercase] = useState(true)
  let [lowercase,setLowercase] = useState(true)
  let [number,setNumber] = useState(true)
  let [symbols,setSymbols] = useState(true)
  let [passwordlen,setPasswordLen] = useState(10)
  let [fPass,setPass]=useState("")

  let generatePassword=()=>{
    let finalPass=""
    let charSet=""
    if (uppercase || lowercase || number || symbols){
      if(uppercase) charSet+=UC;
      if(lowercase) charSet+=LC;
      if(number) charSet+=NC;
      if(symbols) charSet+=SC;
      for(let i=0;i<passwordlen;i++){
        finalPass+=charSet.charAt(Math.floor(Math.random()*charSet.length))
      }
      setPass(finalPass)
    }
    else{
      alert("Tick AtLeast one Box!")
    }
  }

  let copyPass=()=>{
    navigator.clipboard.writeText(fPass)
  }

  return (
    <div className="passwordBox">

    <div className="head"><h2>Password Generator</h2></div>
    
    <div className="passwordBoxIn">
      <input type="text" value={fPass} readOnly/><button onClick={copyPass}>Copy</button>
    </div>

    <div className='passLength'>
      <label>Password Length</label>
      <input type="number" value={passwordlen} onChange={(event)=>setPasswordLen(event.target.value)} min={1} max={20}/>
    </div>

    <div className='passLength'>
      <label>Include Lower Case Letters</label>
      <input type="checkbox" checked={lowercase} onChange={()=>setLowercase(!lowercase)}/>
    </div>

    <div className='passLength'>
      <label>Include Upper Case Letters</label>
      <input type="checkbox" checked={uppercase} onChange={()=>setUppercase(!uppercase)}/>
    </div>

    <div className='passLength'>
      <label>Include Numbers</label>
      <input type="checkbox" checked={number} onChange={()=>setNumber(!number)}/>
    </div>

    <div className='passLength'>
      <label>Include Symbols</label>
      <input type="checkbox" checked={symbols} onChange={()=>setSymbols(!symbols)}/>
    </div>

    <button className='bottom' onClick={generatePassword}>
      Generate Password
    </button>

    </div>


  );
}

export default App;
