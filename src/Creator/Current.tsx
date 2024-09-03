import React from "react";
import dummyData from "./Dummy.json";

export default function Current() {
  return (
    <div className="bg-black h-screen w-screen flex flex-wrap flex-grow-0 space-x-[5rem] p-[5rem]">
      {dummyData.map((data) => {
        return (
          <div className="h-[17rem] w-[14rem] bg-red-400 flex items-center justify-center cursor-pointer text-[1.3rem] transition-transform font-bold rounded-sm hover:h-[17.8rem] hover:w-[14.2rem]">
            {data.tag}
          </div>
        );
      })}
    </div>
  );
}
