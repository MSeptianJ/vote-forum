import { Outlet } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import CategoryBox from "./components/CategoryBox";

function App() {
  return (
    <div className=" h-screen w-full">
      <TopBar />

      <Outlet />

      <div className="absolute bottom-40 w-full md:hidden">
        <div className=" relative flex w-full justify-center">
          <CategoryBox />
        </div>
      </div>

      <BottomBar />
    </div>
  );
}

export default App;
