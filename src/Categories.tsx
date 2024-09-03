import { useState } from 'react';
import news from './assets/news.jpg';
import sports from './assets/sports.jpg';
import others from './assets/others.jpg';
import tech from './assets/tech.jpg';
import arts from './assets/arts.jpg';
import music from './assets/music.jpg';

// Example data for categories
const categoryData = {
  Arts: [arts, arts, arts,arts, arts, arts],
  Music: [music, music, music,music, music, music],
  News: [news, news, news,news, news, news],
  Sports: [sports, sports, sports,sports, sports, sports],
  Tech: [tech, tech, tech,tech, tech, tech],
  Others: [others, others, others,others, others, others]
};

const Categories = () => {
  // State to keep track of the selected category
  const [selectedCategory, setSelectedCategory] = useState('Arts'); // Set to an existing category

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Select a Category</h1>
      <div className="mb-6 flex space-x-4">
        {Object.keys(categoryData).map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium text-white ${
              selectedCategory === category ? 'bg-blue-600' : 'bg-gray-500'
            } transition duration-300 ease-in-out transform hover:scale-105`}
          >
            {category}
          </button>
        ))}
      </div>
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">{selectedCategory}</h2>
        <div className="flex flex-wrap -mx-2">
          {categoryData[selectedCategory].map((element, index) => (
            <div key={index} className="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 p-2">
              <img src={element} alt={`${selectedCategory} ${index}`} className="w-full h-auto rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
