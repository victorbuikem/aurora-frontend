import { useState } from "react";
import video from "../assets/animated.mp4";
import arts from "../assets/arts.jpg";
import music from "../assets/music.jpg";
import news from "../assets/news.jpg";
import others from "../assets/others.jpg";
import sports from "../assets/sports.jpg";
import tech from "../assets/tech.jpg";
import thumbnail from "../assets/thumbnail.jpg";
import { useNavigate } from "react-router";

// Define the type for the category data, which can contain both strings (image/video paths)
type CategoryData = {
  [key: string]: string[];
};

// Example data for categories
const categoryData: CategoryData = {
  Arts: [arts, arts, arts],
  Music: [music, music, music],
  News: [news, news, news],
  Sports: [sports, sports, sports],
  Tech: [tech, tech, tech],
  Others: [others, others, video], // Include video in a category
};

const Categories = ({ creator }: { creator?: boolean }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Arts");
  const navigate = useNavigate();

  return (
    <div className="p-8 relative z-20">
      <h1 className="text-3xl text-white font-bold mb-6">Select a Category</h1>
      <div className="mb-6 flex space-x-4">
        {Object.keys(categoryData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-2 py-1 text-xs rounded-lg font-medium border-black border ${selectedCategory === category
              ? "bg-white text-black"
              : "bg-black text-white"
              } transition duration-300 ease-in-out transform hover:scale-105`}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        {/* <h2 className="text-2xl font-semibold mb-4 text-black">
          {selectedCategory}
        </h2> */}
        <div className="flex flex-wrap -mx-2 w-full">
          {categoryData[selectedCategory]?.map((element, index: number) => (
            <div
              key={index}
              className="w-full border border-slate-200 bg-white rounded-2xl h-60 flex flex-col-reverse sm:w-1/2 md:w-1/3 lg:w-[30%] mx-2 overflow-hidden"
              onClick={() => {
                if (creator) return;
                navigate('/test_id')
              }}
            >
              <div className="p-2">
                <p className="text-md font-bold">Lorem ipsum dolor...</p>
                <p className="my-1 text-sm">{`donations`}</p>
              </div>
              {element.endsWith(".mp4") ? (
                <video
                  src={element}
                  className="w-full h-48 cursor-pointer hover:scale-110 duration-300 object-cover"
                  poster={thumbnail} // Thumbnail image for the video
                  muted
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={element}
                  alt={`${selectedCategory} ${index}`}
                  className="w-full h-48 cursor-pointer hover:scale-110 duration-300 object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
      {/* 
      <MediaModal
        mediaSrc={currentMedia}
        isVideo={isVideo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      /> */}
    </div>
  );
};

export default Categories;
