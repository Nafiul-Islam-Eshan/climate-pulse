import LocationModal from "../components/LocationModal";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center  bg-radial-[at_50%_50%] from-blue-200  to-transparent to-50%">
      <h2 className="text-2xl text-center md:text-3xl lg:text-4xl text-blue-300 font-bold md:font-extrabold">
        Climate <span className="text-blue-400 ">Pulse</span>
      </h2>
      <p className="text-md text-gray-400 my-3">
        Check weather today in Climate Pulse
      </p>

      {/* Button and Modal */}
      <div className="flex justify-center">
        <button
          className="btn scale-90 text-lg bg-blue-500 shadow-none hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300 text-gray-200"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Check Weather
        </button>
        {/* Modal */}
        <LocationModal />
      </div>
    </div>
  );
};

export default Home;
