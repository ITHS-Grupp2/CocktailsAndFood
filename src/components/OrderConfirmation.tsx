import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Random number from 1000 to 9999
function RandomNumber() {
  return Math.floor(Math.random() * 9000) + 1000;
}

// CountdownTimer component
function CountdownTimer() {
  const [seconds, setSeconds] = useState(10);
  const navigate = useNavigate();

  //Set an interval for 10 secs that starts over when page is refreshed
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        clearInterval(intervalId); // Starts from 10 again
        navigate("/"); // Navigates to home page
      }
    }, 1000);

    return () => clearInterval(intervalId); // Starts from 10 again
  }, [seconds]);

  return (
    <div className="countdownTimer">
      <h1>YOU WILL BE REDIRECTED IN {seconds}...</h1>
    </div>
  );
}

// Scrolls up the page
export const OrderConfirmation: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="orderConfirmationPage">
        <h1>Your order has been placed!</h1>
        <div className="orderConfirmationPageNumber">
          <h1>ORDER NR</h1>
          <h1>{RandomNumber()}</h1>
        </div>
        <CountdownTimer />
      </div>
      <Link to="/">
        <div className="centerNewOrderButton">
          <button className="startNewOrderButton">START NEW ORDER</button>
        </div>
      </Link>
    </>
  );
};
