import { Outlet } from "react-router-dom";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className=" h-screen w-full">
      <TopBar />

      <Outlet />
    </div>
  );
}

export default App;
