import Home from "./pages/Home";
import History from "./pages/History";
import Attractions from "./pages/Attractions";
import Header from "./components/Header";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/attractions" element={<Attractions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
