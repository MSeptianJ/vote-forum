import { Outlet, useLocation } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import TopBar from "./components/TopBar";
import CategoryBox from "./components/CategoryBox";

function App() {
  const location = useLocation();

  return (
    <div className=" min-h-screen w-full">
      <TopBar />

      <div className=" h-content m-auto w-full lg:max-w-screen-lg">
        <Outlet />
      </div>

      {location.pathname === "/" && <CategoryBox />}

      <BottomBar />
    </div>
  );
}

export default App;
