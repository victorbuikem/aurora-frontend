"use client";
import { ChangeEvent, useRef, useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Toaster } from "../components/toaster";
import { useToast } from "../components/use-toast";
import { useNavigate } from "react-router";

// import { ToastAction } from "../components/toast";

interface metadata {
  title: string;
  tag: string;
}

export function NewDrawer() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File>();
  const tagOptions = useRef<HTMLSelectElement>(null);
  const [metadata, setMetaData] = useState<metadata>({
    title: "",
    tag: "",
  });
  const [clicked, SetClicked] = useState<boolean>(false);
  //   const { web3 } = useCrypto();
  const { toast } = useToast();
  //   const { approveTokens } = useWebUtility();

  const formData = new FormData();
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };
  const handleTagChange = () => {
    if (tagOptions.current != undefined) {
      const index = tagOptions.current.options.selectedIndex;
      const tag = tagOptions.current.options[index].value;

      setMetaData({ ...metadata, tag: tag });
    }
  };

  const handleTitleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMetaData({ ...metadata, title: event.target.value });
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
      return res;
    },
    onSuccess: async () => {
      setTimeout(() => {
        navigate("/creator", { replace: true });
      }, 3000);
      return toast({
        title: "Content Upload Successful",
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
    SetClicked(true);

    if (file && metadata) {
      formData.append("file", file);
      const readyMetadata = JSON.stringify(metadata);
      formData.append("metadata", readyMetadata);
      mutation.mutate();
    }
  };

  return (
    <div className="relative z-10 ">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0" />
      <div className="fixed inset-0 overflow-hidden  slide-in">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700">
              <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                <div className="px-4 sm:px-6">
                  <div className="flex items-start justify-between">
                    <h2 className="text-base font-semibold leading-6 text-gray-900">
                      Create New Content
                    </h2>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        onClick={() => {
                          navigate("/creator");
                        }}
                        className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        <span className="absolute -inset-2.5" />
                        <span className="sr-only">Close panel</span>x
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative mt-6 flex-1 px-4 sm:px-6">
                  <form className="">
                    <div className="max-w-md mx-auto p-2 bg-transparent rounded-lg">
                      <div className="text-center mb-4">
                        <h2 className="text-2xl font-bold text-slate-950">
                          Upload a Photo or Video
                        </h2>
                        <p className="text-gray-600 text-xs">
                          Share your moments with the world
                        </p>
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
                      <label className="block text-black font-semibold mb-2">
                        Title
                      </label>

                      <textarea
                        id="description"
                        className="block w-full rounded-md border-0 py-1.5 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
                    {(!file || !metadata) && clicked && (
                      <p className="text-red-500 text-[.75rem] mt-[-0.8rem] ml-[.7rem] font-semibold">
                        No empty field!!
                      </p>
                    )}

                    <div className="text-center">
                      <button
                        onClick={handleUpload}
                        className="inline-flex items-center justify-center whitespace-nowrap text-white rounded-md text-sm font-medium ring-offset-background hover:bg-black/80  duration-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black h-10 px-4 py-2 mx-auto w-full mt-10 "
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
                  <Toaster />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
