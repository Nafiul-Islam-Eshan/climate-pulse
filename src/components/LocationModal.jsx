import { useState } from "react";

const LocationModal = () => {
  const [city, setCity] = useState("");

  const handleSubmit = () => {
    // e.prevenDefault();
    console.log("Form submited", city);
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <h2 className="text-xl font-bold text-gray-800">
          What is your location?
        </h2>
        <form onSubmit={handleSubmit} method="dialog">
          <div className="flex flex-col justify-center items-center w-full mt-5">
            <input
              onChange={(e) => setCity(e.target.value)}
              type="text"
              placeholder="Enter City Name"
              className="w-full border my-3 px-4 py-1 rounded-2xl"
            />
            <button className="btn scale-90 text-lg bg-blue-500 shadow-none hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300 text-gray-200">
              Get Weather
            </button>

            <div className="divider divide-neutral">OR</div>

            
            <button className="btn scale-90 text-lg bg-blue-500 shadow-none hover:shadow-lg hover:shadow-blue-400 transition-shadow duration-300 text-gray-200">
              Use My Location
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
