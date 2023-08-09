import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProgressBar from "./components/ProgressBar";
function App() {
  return (
    <>
      <ProgressBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>} />
      </Routes>
    </>
  );
}

export default App;
