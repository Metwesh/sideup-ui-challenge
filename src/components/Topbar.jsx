import { useState } from "react";
import egFallback from "../images/Egypt-flag.jpg";
import egFlag from "../images/Egypt-flag.webp";
import usFallback from "../images/US-flag.jpeg";
import usFlag from "../images/US-flag.webp";
import "./Topbar.css";
export default function Topbar() {
  const [notification, setNotification] = useState(true);

  return (
    <div className="top-bar hide-for-mobile">
      <button className="button-outline wide">Generate Order Link</button>
      <button className="button-outline dropdown">
        Request
        {/* Dropdown arrow */}
        <svg
          className="dropdown-arrow"
          width="12"
          height="6"
          viewBox="0 0 12 6"
          preserveAspectRatio="xMidYMin">
          <path d="M0.82495 0.197952C0.979671 0.0741753 1.14987 0.00841822 1.33553 0.000682161C1.5212 -0.00705389 1.68365 0.0587032 1.8229 0.197952L5.90754 4.28259L10.0154 0.174744C10.1392 0.050967 10.3055 -0.00705351 10.5144 0.000682562C10.7232 0.00841863 10.8896 0.0741757 11.0133 0.197953C11.1681 0.352674 11.2416 0.518999 11.2338 0.696928C11.2261 0.874858 11.1526 1.03345 11.0133 1.1727L6.39492 5.79113C6.31755 5.86849 6.24019 5.92264 6.16283 5.95358C6.08547 5.98453 6.00038 6 5.90754 6C5.81471 6 5.72961 5.98453 5.65225 5.95358C5.57489 5.92264 5.49753 5.86849 5.42017 5.79113L0.82495 1.1959C0.6857 1.05666 0.619945 0.894197 0.627681 0.708532C0.635417 0.522866 0.701173 0.352674 0.82495 0.197952Z" />
        </svg>
      </button>
      <button className="button-primary dropdown">
        New Order
        {/* Dropdown arrow */}
        <svg
          className="dropdown-arrow"
          width="12"
          height="6"
          viewBox="0 0 12 6"
          preserveAspectRatio="xMidYMin">
          <path d="M0.82495 0.197952C0.979671 0.0741753 1.14987 0.00841822 1.33553 0.000682161C1.5212 -0.00705389 1.68365 0.0587032 1.8229 0.197952L5.90754 4.28259L10.0154 0.174744C10.1392 0.050967 10.3055 -0.00705351 10.5144 0.000682562C10.7232 0.00841863 10.8896 0.0741757 11.0133 0.197953C11.1681 0.352674 11.2416 0.518999 11.2338 0.696928C11.2261 0.874858 11.1526 1.03345 11.0133 1.1727L6.39492 5.79113C6.31755 5.86849 6.24019 5.92264 6.16283 5.95358C6.08547 5.98453 6.00038 6 5.90754 6C5.81471 6 5.72961 5.98453 5.65225 5.95358C5.57489 5.92264 5.49753 5.86849 5.42017 5.79113L0.82495 1.1959C0.6857 1.05666 0.619945 0.894197 0.627681 0.708532C0.635417 0.522866 0.701173 0.352674 0.82495 0.197952Z" />
        </svg>
      </button>
      <button
        className="button circle"
        onClick={() => setNotification(!notification)}>
        {notification && <div className="notification-bubble"></div>}
        {/* Notification Icon */}
        <svg width="22" height="25" viewBox="0 0 22 25" fill="none">
          <path
            d="M9.728 23.286H12.2774C11.9402 23.708 11.4685 23.9454 11.0027 23.9454C10.5369 23.9454 10.0652 23.708 9.728 23.286Z"
            stroke="#4278B8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.81818 16.9645L1 19.6253H21L19.1818 16.9645V8.98226V8.98226C19.1818 4.74588 15.3818 1 11 1C6.61824 1 2.81818 4.74588 2.81818 8.98226V16.9645V16.9645Z"
            stroke="#4278B8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button className="button circle">
        {/* Profile icon */}
        <svg width="21" height="26" viewBox="0 0 21 26" fill="none">
          <ellipse
            cx="10.2266"
            cy="6"
            rx="5.125"
            ry="5"
            stroke="#4278B8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.45 21.7782C19.45 17.4824 15.3198 14 10.225 14C5.13017 14 1 17.4824 1 21.7782C1 23.8737 5.39024 24.947 9.88757 24.9981H10.5624C15.0598 24.947 19.45 23.8737 19.45 21.7782Z"
            stroke="#4278B8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <div className="flag-container" id="hide-for-desktop-2">
        <div /*onClick={setLanguageToEnglish} */ className="english-button">
          EN <span className="colored-pipe">|</span>
          <img
            className="flag us-flag"
            src={usFlag}
            onError={() => (this.src = usFallback)}
            alt="US flag"
          />
        </div>
        <div /*onClick={setLanguageToArabic}*/ className="arabic-button">
          AR <span className="colored-pipe">|</span>
          <img
            className="flag eg-flag"
            src={egFlag}
            onError={() => (this.src = egFallback)}
            alt="EG flag"
          />
        </div>
      </div>
    </div>
  );
}
