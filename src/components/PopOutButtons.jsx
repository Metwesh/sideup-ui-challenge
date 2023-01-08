import menuCrate from "../images/Menu-Crate.svg";
import menuMCrate from "../images/Menu-Multi-Crate.svg";
import menuPlane from "../images/Menu-Plane.svg";
import menuPlus from "../images/Menu-Plus.svg";

export default function PopOutButtons() {
  return (
    <div className="pop-out-button-main">
      <div className="p-relative">
        <img className="pop-out-button1" src={menuPlus} alt="Plus Icon" />
        <img className="pop-out-button2" src={menuCrate} alt="Plus Icon" />
        <img className="pop-out-button3" src={menuMCrate} alt="Plus Icon" />
        <img className="pop-out-button4" src={menuPlane} alt="Plus Icon" />
      </div>
    </div>
  );
}
