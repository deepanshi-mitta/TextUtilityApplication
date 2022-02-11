import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  return (
    <>
  <Navbar title="TextUtils" about="AboutTextutils"/>

  <TextForm heading="Enter the text to analyze below"/>
    </>
  );
}

export default App;
