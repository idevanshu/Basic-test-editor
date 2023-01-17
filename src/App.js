import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1567);
  }
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.background = "black";
      showAlert("Dark mode has been enabled.", "success");

    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Dark mode has been disabled.", "success");
    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={Mode} showAlert={showAlert} />}/>
            <Route exact path="/about" element={<About mode={Mode}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
