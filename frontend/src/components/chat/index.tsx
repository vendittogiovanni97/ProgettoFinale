import Avatar from "@mui/material/Avatar";
import Header from "./header";
import { useTheme } from "@mui/material/styles";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const ChatWindows = () => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const theme = useTheme();

  const styleMessage1 = theme.palette.mode === "dark" ? "#2d2d2d" : "#1a237e";
  const styleMessage2 = theme.palette.mode === "dark" ? "#A9A9A9" : "#A9A9A9";
  const styleBg = theme.palette.mode === "dark" ? "#DCDCDC" : "white";

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 pt-[8vh]">
      <Header />
      <div
        className="flex flex-col flex-grow w-full shadow-xl rounded-lg overflow-hidden"
        style={{ background: styleBg }}
      >
        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <Avatar src="/path/to/avatar1.jpg" />
            <div>
              <div
                className=" p-3 rounded-r-lg rounded-bl-lg"
                style={{ background: styleMessage2 }}
              >
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className=" text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ background: styleMessage1 }}
              >
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <Avatar src="/path/to/avatar1.jpg" />
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className=" text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ background: styleMessage1 }}
              >
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <Avatar src="/path/to/avatar1.jpg" />
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <Avatar src="/path/to/avatar1.jpg" />
            <div>
              <div
                className=" p-3 rounded-r-lg rounded-bl-lg"
                style={{ background: styleMessage2 }}
              >
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className=" text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ background: styleMessage1 }}
              >
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <Avatar src="/path/to/avatar1.jpg" />
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className=" text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ background: styleMessage1 }}
              >
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <Avatar src="/path/to/avatar1.jpg" />
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className=" text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ background: styleMessage1 }}
              >
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <Avatar src="/path/to/avatar1.jpg" />
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <Avatar src="/path/to/avatar1.jpg" />
            <div>
              <div
                className=" p-3 rounded-r-lg rounded-bl-lg"
                style={{ background: styleMessage2 }}
              >
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className=" text-white p-3 rounded-l-lg rounded-br-lg"
                style={{ background: styleMessage1 }}
              >
                <p className="text-sm">Lorem ipsum dolor sit.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">
                2 min ago
              </span>
            </div>
            <Avatar src="/path/to/avatar1.jpg" />
          </div>
        </div>

        <div
          className="flex flex-row items-center h-16 rounded-xl w-full px-4"
          style={{ background: styleBg }}
        >
          <div>
            <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-grow ml-4">
            <div className="relative w-full">
              <input
                type="text"
                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
              />
              <button
                onClick={handleClick}
                className="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>
              {showEmojiPicker && (
                <div className="fixed bottom-20 right-4  mt-2 z-10 opacity-90">
                  <EmojiPicker />
                </div>
              )}
            </div>
          </div>
          <div className="ml-4">
            <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
              <span>Send</span>
              <span className="ml-2">
                <svg
                  className="w-4 h-4 transform rotate-45 -mt-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindows;
