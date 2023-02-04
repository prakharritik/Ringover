import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
} from "react-router-dom";

import Navbar from "./components/navbar/Navbar";

import Home from "./pages/home/Home";
import Journey from "./pages/journey/Journey";
import Store from "./pages/store/Store";
import Contact from "./pages/contact/Contact";
import Team from "./pages/team/Team";
import Product from "./pages/product/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/journey" element={<Journey />} />
          <Route exact path="/store" element={<Store />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/product/:id" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
