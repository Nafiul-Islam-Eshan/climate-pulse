import { useLocation } from "react-router";


const Weather = () => {
    const {state} = useLocation();
    const {location, error} = state
    const {name, latitude, longitude} = location.results[0]
    console.log({name, latitude, longitude, error});

    return (
        <div>
            This is <b className="font-medium text-xl text-fuchsia-950">Weather Page</b>
        </div>
    );
};

export default Weather;