import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import { emaillink, githubLink, linkedinLink, twitterLink } from "../utils/links";

export default function RootLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <div id="footer" className="text-xl w-full flex justify-center">
        <div className="flex flex-wrap justify-center">
          <div className="m-2">
            <button className="text-white bg-blue-500 hover:bg-blue-700 duration-300 rounded-2xl text-sm px-4 md:px-5 py-1">
              <a href={twitterLink}>Twitter</a>
            </button>
          </div>
          <div className="m-2">
            <button className="text-white bg-gray-500 hover:bg-gray-700 duration-300 rounded-2xl text-sm px-4 md:px-5 py-1">
              <a href={githubLink}>Github</a>
            </button>
          </div>
          <div className="m-2">
            <button className="text-white bg-blue-600 hover:bg-blue-800 duration-300 rounded-2xl text-sm px-4 md:px-5 py-1">
              <a href={linkedinLink}>
                LinkedIn
              </a>
            </button>
          </div>
          <div className="m-2">
            <button className="text-white bg-red-500 hover:bg-red-700 duration-300 rounded-2xl text-sm px-3 md:px-5 py-1">
              <a href={`mailto:${emaillink}`}>{emaillink}</a>
            </button>
          </div>
        </div>
      </div>

      <p className="mx-auto text-center w-1/2 text-[#98ecff] hover:text-[#4cd8f7]  text-sm font-mono py-5 mb-8">
        Creativity is intelligence having fun.
      </p>
    </>
  );
}
