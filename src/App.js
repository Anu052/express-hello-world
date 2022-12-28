//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import React,{useState} from 'react';
function App() {
  const[mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
    }
    else {
        setMode('light');
        document.body.style.backgroundColor = 'white';
    }
};
  return (
   <>

<Navbar title="TextUtils" about="About"  home="home" mode={mode} toggleMode={toggleMode} />
     <div className="container">
      <TextFrom heading="Enter the text to analyze below" mode={mode}/>
      </div>
     </>
   
  );
}

export default App;
