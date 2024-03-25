import { Link } from "react-router-dom";
import BtnPrimary from "../../../components/BtnPrimary";
import { IconPlus } from "../../../libs/icons";

const HomeTopBar = () => {
  return (
    <div className="md flex w-full items-center justify-center gap-5 px-5 text-white">
      <div className=" m-auto hidden w-10/12 rounded-md bg-primary px-3 py-2 text-white shadow-lg md:block">
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

      <div className=" h-full w-full md:w-auto">
        <Link to={"/submit"}>
          <BtnPrimary
            btnStyles={
              "w-full p-3 flex shadow-lg h-full flex-1 px-4 text-xl justify-center items-center rounded-md gap-3 bg-secondary hover:bg-primary"
            }
            btnText={"New Thread"}
            btnIcon={<IconPlus />}
          />
        </Link>
      </div>
    </div>
  );
};

HomeTopBar.propTypes = {};

export default HomeTopBar;
