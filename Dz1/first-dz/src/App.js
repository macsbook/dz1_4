import logo from './logo.svg';
import './App.css';
import Button from "./components/Button/Button";
import Main from "./Pages/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Main/>
        <Footer/>
    </div>
  );
}

export default App;
