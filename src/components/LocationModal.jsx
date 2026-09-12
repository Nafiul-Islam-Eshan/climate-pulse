import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const LocationModal = () => {
  const [city, setCity] = useState("");

  const handleGeoLocation = async () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const {latitude, longitude} = position.coords
        console.log({latitude, longitude});
      },
      (error) => {
        const {message} = error
        console.log({message});
      },
      {
        timeout: 3000
      }
    );
  };

  const handleSubmit = () => {
    console.log("Form submited", city);
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <h2 className="text-xl font-bold text-gray-800">
          What is your location?
        </h2>
        <form onSubmit={()=>handleSubmit()} method="dialog">
          <div className="flex flex-col justify-center items-center w-full mt-5">
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Enter City Name"
              className="w-full border my-3 px-4 py-1 rounded-2xl"
            />
            <button className="btn scale-90 text-lg bg-linear-to-r from-blue-400 to-blue-500 to-45% shadow-none hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-150 text-gray-200  group">
              Get Weather <span className="group-hover:translate-x-1.5 transition-traslate duration-150"><FaArrowRight /></span>
            </button>

            <div className="divider divide-neutral">OR</div>

            <button
              onClick={handleGeoLocation}
              className="btn scale-90 text-lg bg-linear-to-r from-blue-400 to-blue-500 to-45% shadow-none hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-150 text-gray-200  group"
            >
              Use My Location <span className="group-hover:translate-x-1.5 transition-traslate duration-150"><FaArrowRight /></span>
            </button>
          </div>

          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default LocationModal;
