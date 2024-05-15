import NavBar from "../components/NavBar";
import { emaillink } from "../utils/links";

export default function ErrorLayout() {
  return (
    <>
    <NavBar/>
    <div className="flex justify-center items-center h-[80vh] bg-black">
      <div className="text-center">
        <h1 className="text-4xl font-medium mb-4 text-white">404 - Page Not Found</h1>
        <p className="text-lg text-gray-300 mb-8">Oops! The page you are looking for does not exist.</p>
        <button className="bg-blue-700 duration-300 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-2xl">
          <a href="/" className="text-white">Go Back to Home</a>
        </button>
      </div>
      
    </div>
    <div id="footer" className="text-xl -mt-16 w-full flex justify-center">
          <div className="inline-flex items-center">
            <div>
              <button className="text-white mr-2 bg-blue-500 hover:bg-blue-700 duration-300 inline rounded-2xl text-sm px-4 md:px-5 mb-4 py-1">
                <a href="https://twitter.com/mjxshrivastava"> Twitter </a>
              </button>
            </div>
            <div>
              <button className="text-white mx-2 bg-gray-500 hover:bg-gray-700 duration-300 inline rounded-2xl text-sm px-4 md:px-5 mb-4 py-1">
                <a href="https://github.com/Mrityunjay20"> Github </a>
              </button>
            </div>
            <div>
              <button className="text-white mx-2 bg-blue-600 hover:bg-blue-800 duration-300 inline rounded-2xl text-sm px-4 md:px-5 mb-4 py-1">
                <a href="https://www.linkedin.com/in/mrityunjay-shrivastava/">
                  {" "}
                  LinkedIn{" "}
                </a>
              </button>
            </div>
            <div>
              <button className="text-white bg-red-500 hover:bg-red-700 duration-300 inline rounded-2xl text-sm px-3 md:px-5 mb-4 py-1">
                <a href={`mailto:${emaillink}`}> {emaillink} </a>
              </button>
            </div>
          </div>
        </div>
       
    </>
  );
}
