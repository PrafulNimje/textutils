
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {  
  const [mode,setMode] = useState('light')

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
    }
    else{
      setMode('light')
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className="container m-6 my-3">
      <TextForm heading="Enter text to analyze below"></TextForm>
      {/* <About></About> */}
    </div>
    </>
  );
}

export default App;
