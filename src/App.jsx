import "./App.css";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <main className="main-grid">
      <Sidebar />
      <Topbar />
    </main>
  );
}

export default App;
