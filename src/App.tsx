import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home/Home";
import Succusfull from "./Pages/Succus";
import About from "./Pages/About/About";
import Reservation from "./Pages/Reservation/Reservation";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
        </Route>
        <Route element={<Layout hideHeader />}>
          <Route path="/succuspage" element={<Succusfull />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
