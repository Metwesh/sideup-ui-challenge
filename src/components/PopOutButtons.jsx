import { useState } from "react";
import menuCrate from "../images/Menu-Crate.svg";
import menuMCrate from "../images/Menu-Multi-Crate.svg";
import menuPlane from "../images/Menu-Plane.svg";
import menuPlus from "../images/Menu-Plus.svg";

export default function PopOutButtons() {
  const [popOutState, setPopOutState] = useState(false)

  return (
    <div className="pop-out-button-main pointer" onClick={() => setPopOutState(!popOutState)}>
      <div className="p-relative">
        <img className={`pop-out-button1 ${popOutState ? "active" : ""}`} src={menuPlus} alt="Plus Icon" />
        <img className={`pop-out-button2 ${popOutState ? "active" : ""}`} src={menuCrate} alt="Plus Icon" />
        <img className={`pop-out-button3 ${popOutState ? "active" : ""}`} src={menuMCrate} alt="Plus Icon" />
        <img className={`pop-out-button4 ${popOutState ? "active" : ""}`} src={menuPlane} alt="Plus Icon" />
      </div>
    </div>
  );
}
