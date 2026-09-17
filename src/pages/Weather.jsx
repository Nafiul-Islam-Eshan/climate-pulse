import { useLocation } from "react-router";
import { getWeatherDetail } from "../services/getWeatherDetail";
import { useEffect, useState } from "react";

const Weather = () => {
  const { state } = useLocation();
  const { location } = state;
  
  const [weatherDetail, setWeatherDetail] = useState(null)

  useEffect(() => {
    if(!Location) return;
    
    const fetchWeatherDetail = async () => {
        const data = await getWeatherDetail(location);
        setWeatherDetail(data);
    }
    fetchWeatherDetail();
  }, [location])

  console.log(weatherDetail);

  return (
    <div>
      This is{" "}
      <b className="font-medium text-xl text-fuchsia-950">Weather Page</b>
      {/* <p className="text-xl font-light text-blue-950">Name: {name}</p>
            <p className="text-xl font-light text-blue-950">latitude: {latitude}</p>
            <p className="text-xl font-light text-blue-950">longitude: {longitude}</p> */}
    </div>
  );
};

export default Weather;
