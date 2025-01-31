import Calendar from "./Calendar";
import ReservationForm from "./ReservationForm";
import LandingPage from "./LandingPage";

const Reservation = () => {
  return (
    <div>
      <LandingPage label="Reservation" />
      <div className="container mx-auto flex flex-col md:flex-row lg:flex-row justify-center gap-0 md:gap-8">
        <Calendar />
        <ReservationForm />
      </div>
    </div>
  );
};

export default Reservation;
