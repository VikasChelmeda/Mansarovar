import { BrowserRouter,Routes,Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/categories" element={<Navbar />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
