import { useLocation } from "react-router";


const Weather = () => {
    const {state} = useLocation();
    const {location} = state
    const {name, latitude, longitude} = location
    console.log({name, latitude, longitude});

    return (
        <div>
            This is <b className="font-medium text-xl text-fuchsia-950">Weather Page</b>
            <p className="text-xl font-light text-blue-950">Name: {name}</p>
            <p className="text-xl font-light text-blue-950">latitude: {latitude}</p>
            <p className="text-xl font-light text-blue-950">longitude: {longitude}</p>
        </div>
    );
};

export default Weather;