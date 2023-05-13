import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <>
        <Router>
        <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element=<Home></Home>></Route>
            <Route exact path="/about" element=<About></About>></Route>        
          </Routes>
        </Router>
        <h1>This is react app</h1>
      </>
    </div>
  );
}

export default App;
