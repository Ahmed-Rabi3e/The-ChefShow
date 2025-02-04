import { AnimatePresence } from "framer-motion";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import Layout from "./Components/Layout";
import ForgetPassword from "./Pages/Auth/ForgetPassword";
import Login from "./Pages/Auth/Login";
import ResetPassword from "./Pages/Auth/ResetPassword";
import Signup from "./Pages/Auth/SignUp";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import TimelineDemo from "./Pages/Past Show/PastShow";
import Reservation from "./Pages/Reservation/Reservation";
import Succusfull from "./Pages/Succus";
import AccountDetails from "./Pages/Account/AccountDetails";
import AccountSettings from "./Pages/Account/AccountSettings";
import MyBooking from "./Pages/Account/MyBooking";
import OTPVerification from "./Pages/Auth/OTPVerification";

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
        <Route element={<Layout />}>
          <Route path="/account" element={<AccountSettings />}>
            <Route path="details" element={<AccountDetails />} />
            <Route path="booking" element={<MyBooking />} />
          </Route>
        </Route>
        <Route element={<Layout hideHeader />}>
          <Route path="/succuspage" element={<Succusfull />} />
        </Route>
        <Route element={<Layout hideFooter hideHeader />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
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
