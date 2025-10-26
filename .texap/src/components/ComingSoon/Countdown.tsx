"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface CountdownProps {
  endDate: string; // Format: "Month Day, Year HH:mm:ss"
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const endDateTime = new Date("August 23, 2025 17:00:00 PDT").getTime();
    const now = new Date().getTime();
    const timeRemaining = endDateTime - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <>
      <div className="coming-soon-area">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="coming-soon-content">
                <div className="d-table">
                  <div className="d-table-cell">
                    <Link href="/" className="logo">
                      <Image
                        src="/images/black-logo.png"
                        alt="image"
                        width={138}
                        height={44}
                      />
                    </Link>

                    <h2>We Are Launching Soon</h2>
                    <div
                      id="timer"
                      className="flex-wrap d-flex justify-content-center"
                    >
                      <div
                        id="days"
                        className="align-items-center flex-column d-flex justify-content-center"
                      >
                        {countdown.days} <span>Days</span>
                      </div>
                      <div
                        id="hours"
                        className="align-items-center flex-column d-flex justify-content-center"
                      >
                        {countdown.hours} <span>Hours</span>
                      </div>
                      <div
                        id="minutes"
                        className="align-items-center flex-column d-flex justify-content-center"
                      >
                        {countdown.minutes} <span>Minutes</span>
                      </div>
                      <div
                        id="seconds"
                        className="align-items-center flex-column d-flex justify-content-center"
                      >
                        {countdown.seconds} <span>Seconds</span>
                      </div>
                    </div>

                    <form
                      className="newsletter-form"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <input
                        type="email"
                        className="input-newsletter"
                        placeholder="Enter your email"
                        name="EMAIL"
                        required
                      />
                      <button type="submit" className="default-btn">
                        Subscribe
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <div className="coming-soon-image">
                <Image
                  src="/images/coming-soon.jpg"
                  alt="coming-soon"
                  width={1000}
                  height={1100}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
