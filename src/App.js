import React,{useState} from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {

  const[mode, setMode] = useState('light');
  const[yellowMode, setYellowMode] = useState('white');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type,
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode("dark")
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled","success")
      document.title = 'TextUtils | Dark Mode'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'blanchedalmond';
      // document.body.style.backgroundColor = 'mediumaquamarine';
      showAlert("Light Mode Enabled","success")
      document.title = 'TextUtils | Light Mode'
    }
  }
  const toggleYellow = () =>{
    if(yellowMode === 'white'){
      setYellowMode("yellow")
      setMode("dark")
      document.body.style.backgroundColor = '#92921a';
      showAlert("Yellow Mode Enabled","success")
    }
    else {
      setYellowMode('white')
      setMode('light')
      document.body.style.backgroundColor = 'blanchedalmond';
      showAlert("Light Mode Enabled","success")
    }
  }



  return (
    <>
{/* <Router> */}
    <Navbar title="TextUtils" aboutText="About us" mode={mode} yellowMode={toggleYellow} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    {/* <Switch> */}
          {/* <Route exact path="/about">
            <About />
          </Route> */}
          
          {/* <Route exact path="/"> */}
              <TextForm showAlert={showAlert} heading="Enter the text to Analyze" mode={mode}/>
          {/* </Route> */}
    {/* </Switch> */}

    </div>
    {/* </Router> */}
    </>
  );
}
export default App;
