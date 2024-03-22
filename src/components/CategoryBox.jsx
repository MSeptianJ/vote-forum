import BtnPrimary from "./BtnPrimary";

const CategoryBox = () => {
  return (
    <div className=" absolute top-0 m-auto w-10/12 rounded-md bg-primary p-4 px-6 text-white">
      <h3 className=" mb-2 text-xl font-bold">Categories</h3>
      <div className=" flex flex-wrap gap-3">
        <BtnPrimary
          btnText={"#dicoding"}
          btnStyles={"text-center h-full"}
          btnFunction={() => console.log("boop")}
        />
        <BtnPrimary
          btnText={"#Mom"}
          btnStyles={"text-center h-full"}
          btnFunction={() => console.log("boop")}
        />
        <BtnPrimary
          btnText={"#hai"}
          btnStyles={"text-center h-full"}
          btnFunction={() => console.log("boop")}
        />
      </div>
    </div>
  );
};

CategoryBox.propTypes = {};

export default CategoryBox;
