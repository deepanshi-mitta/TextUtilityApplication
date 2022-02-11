import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alert from './component/Alert';
function App() {
  const [mode,setmode]=useState('light');
  const [alert,setalert]=useState(null);
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setalert(null);
    },1500)

  }
  const toggleMode=()=>{
    if(mode==='light'){
      setmode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","Succes");
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","Succes");
    }
  }
  return (
    <>
  <Navbar title="TextUtils" about="AboutTextutils" mode={mode} toggleMode={toggleMode}/>
  <Alert alert={alert}/>
  <TextForm showAlert={showAlert} heading="Enter the text to analyze below"mode={mode}/>
    </>
  );
}

export default App;
