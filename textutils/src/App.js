import { useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import About from "./component/About";
import{
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "succes");
      document.title = "TextUtils-Darkmode";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "succes");
      document.title = "TextUtils-Lightmode";
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        about="AboutTextutils"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        <Switch>
          <Route exact path="/about">
            <About  mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm
          showAlert={showAlert}
          heading=" Try TextUtils-Word Counter,Character Counter,Remove extra spaces"
          mode={mode}
        />
          </Route>
        </Switch>
       
      </div>
      </Router>
    </>
  );
}

export default App;
