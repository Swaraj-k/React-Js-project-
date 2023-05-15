import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";

function App() {
  return (
    <>
      <NoteState>
          <div className="contianer text-center">
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route exact path="/" element=<Home></Home>></Route>
            <Route exact path="/about" element=<About></About>></Route>
          </Routes>
        </Router>
        <h1>This is react app</h1>
          </div>
      </NoteState>
    </>
  );
}

export default App;
