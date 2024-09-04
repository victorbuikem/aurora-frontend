import logo from "../assets/aurora.ico";
import Background from "./Background";
import { useNavigate } from "react-router";
import Categories from "../Viewer/Category";
// import { useCrypto } from "../providers/web-3-provider";

export function Carousel() {
  const navigate = useNavigate();
  // const { wallet } = useCrypto();
  // console.log("the new context ", wallet);

  const handleCreateNewClick = () => {
    navigate("/creator/join"); // Navigate to the "Create" scene
  };

  return (
    <div className="">
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
              className="pl-10 pr-4 py-2 border rounded-lg shadow-sm outline-none  focus:ring-black"
            />
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-lg shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-black-500 focus:ring-opacity-50">
            Search
          </button>
        </div>

        <button
          className="ml-2 px-4 py-2 bg-black text-white rounded-lg shadow-sm hover:bg-black/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleCreateNewClick}
        >
          Become a Creator
        </button>
      </div>
      <h1 className="text-center text-black font-bold text-3xl mt-10">{`CreatorID`}</h1>
      <p className="text-center text-sm my-2">
        about this creator who loves creating what you love
      </p>

      <section>
        <Categories />
      </section>
    </div>
  );
}
