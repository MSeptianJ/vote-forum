import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className=" h-screen w-full">
      <Navigation />

      <Outlet />
    </div>
  );
}

export default App;
