import BtnPrimary from "../../../components/BtnPrimary";
import { IconPlus } from "../../../libs/icons";

const HomeTopBar = () => {
  return (
    <div className="md flex w-full gap-5 px-5 text-white">
      <div className=" m-auto hidden w-10/12 rounded-md bg-primary p-4 px-6 text-white md:block">
        <h3 className=" mb-2 text-xl font-bold">Categories</h3>
        <div className=" flex gap-3 overflow-x-auto">
          <BtnPrimary
            btnText={"#dicoding"}
            btnStyles={
              "text-center text-sm h-full border border-secondary p-1 px-3 rounded-md hover:bg-secondary"
            }
            btnFunction={() => console.log("boop")}
          />
          <BtnPrimary
            btnText={"#Mom"}
            btnStyles={
              "text-center text-sm h-full border border-secondary p-1 px-3 rounded-md hover:bg-secondary"
            }
            btnFunction={() => console.log("boop")}
          />
          <BtnPrimary
            btnText={"#hai"}
            btnStyles={
              "text-center text-sm h-full border border-secondary p-1 px-3 rounded-md hover:bg-secondary"
            }
            btnFunction={() => console.log("boop")}
          />
        </div>
      </div>

      <BtnPrimary
        btnStyles={
          "w-full p-3 flex flex-1 px-4 text-xl justify-center items-center rounded-md gap-3 bg-secondary hover:bg-primary"
        }
        btnText={"New Thread"}
        btnIcon={<IconPlus />}
      />
    </div>
  );
};

HomeTopBar.propTypes = {};

export default HomeTopBar;
