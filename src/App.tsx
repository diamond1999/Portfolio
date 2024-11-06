import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./home/HomePage";
import ResumePage from "./resume/ResumePage";
import Skills from "./skills/Skills";
import Contact from "./contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
