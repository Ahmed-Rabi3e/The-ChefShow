import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Reservation from "./Pages/Reservation/Reservation";
import Succusfull from "./Pages/Succus";

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
