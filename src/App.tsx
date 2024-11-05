import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./services/Services";
import HomePage from "./home/HomePage";
import ResumePage from "./resume/ResumePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
