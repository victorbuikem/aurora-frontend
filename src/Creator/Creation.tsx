import { useNavigate } from "react-router-dom";
import Categories from "../Viewer/category";
import logo from "../assets/aurora.ico";
import Background from "../components/background";
import { Outlet } from "react-router";

export const Creation = () => {
  const navigate = useNavigate();
  const handleCreateNewClick = () => {
    navigate("new"); // Navigate to the "Create" scene
  };

  return (
    <div className="">
      <div>
        <Background />
        <div className="flex items-center justify-between p-4 relative z-20">
          <img
            src={logo}
            alt=""
            width={50}
            height={50}
            className="cursor-pointer"
          />
          <div className="flex space-x-3 items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg shadow-sm outline-none focus:ring-black bg-white"
              />
            </div>
            <button className="px-4 py-2 bg-black text-white rounded-lg shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-opacity-50">
              Search
            </button>
          </div>

          <button
            onClick={handleCreateNewClick} // Add onClick handler
            className="ml-2 px-4 py-2 bg-black text-white rounded-lg shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Create New
          </button>
        </div>
        <h1 className="text-center text-black font-bold text-3xl mt-10">{`CreatorID`}</h1>
        <p className="text-center text-sm my-2">
          about this creator who loves creating what you love
        </p>
        <Categories creator />
      </div>
      <div className="max-h-[30rem] max-w-[40rem] w-[30%] absolute bottom-28 pb-10 left-[2rem] z-[100] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Creation;
