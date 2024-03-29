import { Link } from "react-router-dom";
import RegisterInput from "./components/RegisterInput";

const RegisterPage = () => {
  return (
    <div className="mt-8 w-full px-5">
      <div className="mx-auto mb-5 flex w-full max-w-xl flex-col gap-2 rounded-md bg-primary p-5 text-white shadow-lg">
        <h4 className=" text-xl font-bold">Registrasi</h4>

        <div className=" w-full text-sm text-gray-300">
          <p>
            Buat sebuah akun untuk berdiskusi dengan membuat{" "}
            <span className=" font-bold text-white">Thread</span>
          </p>
        </div>

        <RegisterInput />

        <div className=" mt-2 flex w-full gap-1 text-xs text-gray-300">
          <p>Sudah memiliki Akun?</p>
          <Link to={"/login"} className=" text-accent hover:underline">
            Log In disini
          </Link>
        </div>
      </div>
    </div>
  );
};

RegisterPage.propTypes = {};

export default RegisterPage;
