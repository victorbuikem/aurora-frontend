import React, { ChangeEvent, useRef, useState } from "react";

export const NewContent = () => {
  const [file, setFile] = useState<File>();
  const tagOptions = useRef<HTMLSelectElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
    handleTagChange();
  };
  const handleTagChange = () => {
    if (tagOptions.current != undefined) {
      const index = tagOptions.current.options.selectedIndex;
      console.log(index);
    }
  };
  return (
    <div className="max-h-full w-full bg-white opacity-[.98]  rounded-l-lg shadow-lg basis-[45%]">
      <form className="p-5">
        <div className="max-w-md mx-auto p-2 bg-transparent rounded-lg">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-white">
              Upload a Photo or Video
            </h2>
            <p className="text-gray-600">Share your moments with the world</p>
          </div>

          <div className="border-dashed border-2 border-gray-400 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
            <label className="flex flex-col items-center justify-center h-48 text-center">
              <svg
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18M13 8v8m0 0l4-4m-4 4l-4-4"
                ></path>
              </svg>
              {file ? (
                <div className="text-white">{file.name}</div>
              ) : (
                <div className="flex flex-col">
                  <strong className="text-gray-600">
                    Drag & drop or click to upload
                  </strong>
                  <span className="text-sm text-gray-500">
                    (jpg, png, mp4, less than 10MB)
                  </span>
                </div>
              )}
              <input
                type="file"
                className="hidden"
                accept="image/*,video/*"
                onChange={handleFileChange}
              />
            </label>
          </div>

          {/* <div className="text-center mt-4">
            <button className="bg-gradient-to-b from-orange-600 to-orange-700 text-white px-7 py-2 rounded-lg hover:scale-110 duration-300 transition-colors">
              Upload
            </button>
          </div> */}
        </div>
        <div className="mb-4 mt-[3rem]">
          <label className="block text-black font-semibold mb-2">Title</label>
          <textarea
            id="description"
            className="w-full p-3 border border-gray-400 text-center flex justify-center items-center  text-slate-950 rounded-lg focus:outline-none"
            placeholder="e.g What is web 3 Lagos?"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-white font-semibold mb-2">
            Category
          </label>
          <select
            id="category"
            className="w-full p-3 border border-gray-200 rounded-lg outline-none"
            ref={tagOptions}
          >
            <option value="">Select a category</option>
            <option value="nature">Arts</option>
            <option value="travel">Football</option>
            <option value="food">Music</option>
            <option value="lifestyle">News</option>
            <option value="technology">Technology</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="text-center">
          <button className="bg-gradient-to-b from-orange-600 to-orange-700 text-white px-7 py-2 rounded-lg hover:scale-110 duration-300 transition-colors">
            Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewContent;
