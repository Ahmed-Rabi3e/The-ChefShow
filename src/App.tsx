import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "./Components/Layout";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Reservation from "./Pages/Reservation/Reservation";
import Succusfull from "./Pages/Succus";
import TimelineDemo from "./Pages/Past Show/PastShow";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pastshows" element={<TimelineDemo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reservation" element={<Reservation />} />
        </Route>
        <Route element={<Layout hideHeader />}>
          <Route path="/succuspage" element={<Succusfull />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
