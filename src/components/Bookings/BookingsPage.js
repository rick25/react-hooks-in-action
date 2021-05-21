import WeekPicker from "./WeekPicker";

const BookingsPage = () => {
  return (
    <main className="bookables-page">
      <p>Reservas!</p>
      <WeekPicker date={new Date()} />
    </main>
  );
};

export default BookingsPage;
