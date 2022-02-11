import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import About from './component/About';
function App() {
  const [mode,setmode]=useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
  <Navbar title="TextUtils" about="AboutTextutils" mode={mode} toggleMode={toggleMode}/>
  <TextForm heading="Enter the text to analyze below"mode={mode}/>
    </>
  );
}

export default App;
