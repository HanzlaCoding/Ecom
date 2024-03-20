import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<h1>Home Component</h1>}></Route>
          <Route path="/add" element={<h1>Product Component</h1>}></Route>
          <Route
            path="/update"
            element={<h1>Product Update Component</h1>}
          ></Route>
          <Route path="/profile" element={<h1>Profile Component</h1>}></Route>
          <Route path="/logout" element={<h1>logout Component</h1>}></Route>
          <Route path="/signup" element={<h1>signup Component</h1>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
