import { Outlet } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className=" h-screen w-full">
      <TopBar />

      <Outlet />

      <BottomBar />
    </div>
  );
}

export default App;
