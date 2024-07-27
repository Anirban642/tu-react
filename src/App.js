// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
// import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');

  const [alert, setAlert] = useState();
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if (mode==='light') {
      setMode('dark');
      document.body.style.backgroundColor='#042745';
      showAlert("Dark mode has been Enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been Enabled","success")
    }
  }
  // Green Mode By Me
  // const toggleMode1= ()=>{
  //   if (mode==='light') {
  //     setMode('dark');
  //     document.body.style.backgroundColor='#20c997';
  //     showAlert("Green mode has been Enabled","success");
  //   } else {
  //     setMode('light');
  //     document.body.style.backgroundColor='white';
  //     showAlert("Light mode has been Enabled","success")
  //   }
  // }

  return (
    <>
    {/* <BrowserRouter> */}
      <Navbar
        title="TextUtils"
        about="About"
        mode={mode}
        toggleMode={toggleMode}
        // toggleMode1={toggleMode1}
      />
      <Alert alert={alert} />
      <div className="container my-4" mode={mode}>
        {/* <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}></Route>
          <Route
            exact path="/"
            element={ */}
              <TextForm
                showAlert={showAlert}
                heading="Try Textutils - Word Counter , Character Counter , Uppercase to Lowercase and Vice-Versa"
                mode={mode}
              />
            {/* }
          ></Route>
        </Routes> */}
      </div>
    {/* </BrowserRouter> */}
  </>
  );
}

export default App;
