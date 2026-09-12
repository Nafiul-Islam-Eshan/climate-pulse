import { FaArrowRight } from "react-icons/fa";
import LocationModal from "../components/LocationModal";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center bg-radial-[at_50%_50%] from-blue-200  to-transparent to-50%">
      <h2 className="text-2xl text-center md:text-3xl lg:text-4xl text-cyan-950 font-bold md:font-extrabold">
        Climate <span className="text-blue-400 ">Pulse</span>
      </h2>
      <div className=" my-5">
        <p className="text-xl text-gray-800 w-full">
        Know the weather. Know What to carry.
      </p>
      <p className="max-w-85 mt-2 text-sm font-light ">
        Check the weather in your city and get a simple smart suggestion for your day ﹏ whether it is an umbrella, a water bottle, or warm cloths.
      </p>
      </div>

      {/* Button and Modal */}
      <div className="flex justify-center">
        <button
          className="btn scale-90 text-lg bg-linear-to-r from-blue-400 to-blue-500 to-45% shadow-none hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-150 text-gray-200  group"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Check Weather <span className="group-hover:translate-x-1.5 transition-traslate duration-150"><FaArrowRight /></span>
        </button>
        {/* Modal */}
        <LocationModal />
      </div>
    </div>
  );
};

export default Home;
