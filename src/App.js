
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtils" aboutText="About TextUtils"/>
    <div className="container m-6">
      <TextForm heading="Enter text to analyze below"></TextForm>
    </div>
    </>
  );
}

export default App;
