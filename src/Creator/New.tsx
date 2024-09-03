import { ChangeEvent, useRef, useState } from "react";
import axios from "axios";
import { useCrypto } from "../providers/web-3-provider";
import { useMutation } from "@tanstack/react-query";
import { Toaster } from "../components/toaster";
import { useToast } from "../components/use-toast";
// import { ToastAction } from "../components/toast";

interface metadata {
  title: string;
  tag: string;
}

export const NewContent = () => {
  const [file, setFile] = useState<File>();
  const tagOptions = useRef<HTMLSelectElement>(null);
  const [metadata, setMetaData] = useState<metadata>({
    title: "",
    tag: "",
  });
  const { web3 } = useCrypto();
  const { toast } = useToast();
  if (web3?.eth && web3?.eth.Contract) {
    // const contract = new web3.eth.Contract();
  }

  const formData = new FormData();
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
    // handleTagChange();
  };
  const handleTagChange = () => {
    if (tagOptions.current != undefined) {
      const index = tagOptions.current.options.selectedIndex;
      const tag = tagOptions.current.options[index].value;
      console.log("the tag is", tag);
      setMetaData({ ...metadata, tag: tag });
    }
  };

  const handleTitleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMetaData({ ...metadata, title: event.target.value });
    console.log(metadata);
  };
  const mutation = useMutation({
    mutationFn: async () => {
      const apiKey = import.meta.env.VITE_API_KEY;
      const apiSecret = import.meta.env.VITE_API_Secret;
      const res = await axios.post(url, formData, {
        maxContentLength: Infinity,
        headers: {
          //   "Content-Type": `multipart/form-data; boundary=${formData._boundary}`,
          pinata_api_key: `${apiKey}`,
          pinata_secret_api_key: `${apiSecret}`,
        },
      });
      console.log("first", res);
      return res;
    },
    onSuccess: async () => {
      return toast({
        title: "Video Upload Successful",
        description: `Thank you for uploading`,
      });
    },
    onError: async () => {
      return toast({
        variant: "destructive",
        title: "Upload failed",
        description: "Please Try Again or refresh the page",
      });
    },
  });
  const handleUpload = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();

    if (file && metadata) {
      formData.append("file", file);
      const readyMetadata = JSON.stringify(metadata);
      formData.append("metadata", readyMetadata);
      mutation.mutate();
    }
  };

  return (
    <div className="max-h-full w-full bg-white opacity-[.98] slide-in rounded-lg shadow-lg basis-[45%]">
      <form className="p-5">
        <div className="max-w-md mx-auto p-2 bg-transparent rounded-lg">
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold text-slate-950">
              Upload a Photo or Video
            </h2>
            <p className="text-gray-600 text-xs">Share your moments with the world</p>
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
                <div className="text-black">{file.name}</div>
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
        <div className="my-2">
          <label className="block text-black font-semibold mb-2">Title</label>
          <textarea
            id="description"
            className="w-full p-3 border bg-white border-gray-400 text-center flex justify-center items-center  text-slate-950 rounded-lg focus:outline-none"
            placeholder="e.g What is web 3 Lagos?"
            onChange={handleTitleChange}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-white font-semibold mb-2 ">
            Category
          </label>
          <select
            id="category"
            className="w-full p-3 border border-gray-200 rounded-lg outline-none bg-white"
            ref={tagOptions}
            onChange={handleTagChange}
          >
            <option value="">Select a category</option>
            <option value="arts">Arts</option>
            <option value="travel">Travel</option>
            <option value="food">Food</option>
            <option value="lifestyle">Lifestyle</option>
            <option value="technology">Technology</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="text-center">
          <button
            onClick={handleUpload}
            className="bg-gradient-to-b from-orange-600 to-orange-700 text-white px-7 py-2 rounded-lg hover:scale-110 duration-300 transition-colors"
          >
            {mutation.isPending ? (
              <div>
                <span className="loading loading-ring loading-xs"></span>
                <span className="loading loading-ring loading-xs"></span>
              </div>
            ) : (
              <p>Publish</p>
            )}
          </button>
        </div>
      </form>
      {(mutation.isSuccess || mutation.isError) && <Toaster />}
    </div>
  );
};

export default NewContent;
