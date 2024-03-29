const SubmitInput = () => {
  return (
    <form className="mt-3 flex w-full flex-col gap-4">
      <div className="grid w-full space-y-1">
        <label htmlFor="titleThread" className="w-full text-sm text-gray-300">
          Title
        </label>
        <input
          type="text"
          id="titleThread"
          className="w-full rounded-[4px] border border-secondary bg-transparent"
        />
      </div>

      <div className="grid w-full space-y-1">
        <label
          htmlFor="categoryThread"
          className="w-full text-sm text-gray-300"
        >
          Category
        </label>
        <input
          type="text"
          id="categoryThread"
          className="w-full rounded-[4px] border border-secondary bg-transparent"
        />
      </div>

      <div className="grid w-full space-y-1">
        <label htmlFor="bodyThread" className="w-full text-sm text-gray-300">
          Body Text
        </label>
        <div
          id="bodyThread"
          contentEditable
          className=" min-h-32 w-full rounded-[4px] border border-secondary p-2"
        ></div>
      </div>

      <div className="mt-3 flex w-full justify-center">
        <input
          type="submit"
          value="Submit"
          className=" w-1/2 max-w-52 rounded-md border border-secondary bg-secondary py-1 text-sm font-bold hover:bg-primary"
        />
      </div>
    </form>
  );
};

SubmitInput.propTypes = {};

export default SubmitInput;
