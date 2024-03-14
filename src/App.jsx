import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className=" h-screen w-full bg-gray-600">
      <h1 className=" m-auto text-center text-xl font-bold uppercase text-white">
        Hello
      </h1>

      <Outlet />
    </div>
  );
}

export default App;
