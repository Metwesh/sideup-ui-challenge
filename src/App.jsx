import "./App.css";
import MainDash from "./MainDash";
import MobileDash from "./MobileDash";
import SecondBar from "./components/SecondBar";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <main className="main-grid">
      {window.matchMedia("(max-width: 376px)").matches ? (
        <MobileDash />
      ) : (
        <>
          <Sidebar />
          <Topbar />
          <SecondBar />
          <MainDash />
        </>
      )}
    </main>
  );
}

export default App;
