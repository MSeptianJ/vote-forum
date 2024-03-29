import SubmitInput from "./components/SubmitInput";

const SubmitPage = () => {
  return (
    <div className="mt-8 w-full px-5">
      <div className="mx-auto mb-5 flex w-full max-w-xl flex-col gap-2 rounded-md bg-primary p-5 text-white shadow-lg">
        <h4 className=" text-xl font-bold">New Thread</h4>

        <div className=" w-full text-sm text-gray-300">
          <p>
            Ayo berdiskusi dengan yang lain dengan membuat{" "}
            <span className=" font-bold text-white">Thread</span>
          </p>
        </div>

        <SubmitInput />
      </div>
    </div>
  );
};

SubmitPage.propTypes = {};

export default SubmitPage;
