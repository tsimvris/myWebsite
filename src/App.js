import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Navigation/NavBar";
import HomePage from "./components/HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
