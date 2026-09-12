import LocationModal from "../components/LocationModal";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center  ">
      <h2 className="text-2xl text-center md:text-3xl lg:text-4xl text-blue-300 font-bold md:font-extrabold">
        Climate <span className="text-blue-400 ">Pulse</span>
      </h2>
      <p className="text-md text-gray-300 my-3">
        Check weather today in Climate Pulse
      </p>

      {/* Button and Modal */}
      <div className="flex justify-center">
        {/* <button
          popoverTarget="my-modal-1"
          className="btn bg-blue-500 hover:bg-blue-600 transition-colors duration-100 text-gray-200"
        >
          Check Weather
        </button> */}
        <button
          className="btn bg-blue-500 hover:bg-blue-600 transition-colors duration-100 text-gray-200"
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
