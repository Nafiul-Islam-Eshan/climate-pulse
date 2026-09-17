import axios from "axios";

const WMO_CODES = {
    0: {
        condition: "clear",
        description: "Clear Sky",
        label: "Clear Sky",
        icon: "clear_sky",
    },

    1: {
        condition: "clear",
        description: "Mainly clear",
        label: "Mainly Clear",
        icon: "mainly_clear",
    },

    2: {
        condition: "cloudy",
        description: "Partly cloudy",
        label: "Partly Cloudy",
        icon: "partly_cloudy",
    },

    3: {
        condition: "cloudy",
        description: "Overcast",
        label: "Overcast",
        icon: "overcast",
    },

    45: {
        condition: "fog",
        description: "Fog",
        label: "Fog",
        icon: "fog",
    },

    48: {
        condition: "fog",
        description: "Depositing rime fog",
        label: "Depositing Rime Fog",
        icon: "rime_fog",
    },

    51: {
        condition: "drizzle",
        description: "Light drizzle",
        label: "Light Drizzle",
        icon: "drizzle_light",
    },

    53: {
        condition: "drizzle",
        description: "Moderate drizzle",
        label: "Moderate Drizzle",
        icon: "drizzle_moderate",
    },

    55: {
        condition: "drizzle",
        description: "Dense drizzle",
        label: "Dense Drizzle",
        icon: "drizzle_dense",
    },

    56: {
        condition: "freezing_drizzle",
        description: "Light freezing drizzle",
        label: "Light Freezing Drizzle",
        icon: "freezing_drizzle_light",
    },

    57: {
        condition: "freezing_drizzle",
        description: "Dense freezing drizzle",
        label: "Dense Freezing Drizzle",
        icon: "freezing_drizzle_dense",
    },

    61: {
        condition: "rain",
        description: "Slight rain",
        label: "Slight Rain",
        icon: "rain_light",
    },

    63: {
        condition: "rain",
        description: "Moderate rain",
        label: "Moderate Rain",
        icon: "rain_moderate",
    },

    65: {
        condition: "rain",
        description: "Heavy rain",
        label: "Heavy Rain",
        icon: "rain_heavy",
    },

    66: {
        condition: "freezing_rain",
        description: "Light freezing rain",
        label: "Light Freezing Rain",
        icon: "freezing_rain_light",
    },

    67: {
        condition: "freezing_rain",
        description: "Heavy freezing rain",
        label: "Heavy Freezing Rain",
        icon: "freezing_rain_heavy",
    },

    71: {
        condition: "snow",
        description: "Slight snowfall",
        label: "Slight Snowfall",
        icon: "snow_light",
    },

    73: {
        condition: "snow",
        description: "Moderate snowfall",
        label: "Moderate Snowfall",
        icon: "snow_moderate",
    },

    75: {
        condition: "snow",
        description: "Heavy snowfall",
        label: "Heavy Snowfall",
        icon: "snow_heavy",
    },

    77: {
        condition: "snow",
        description: "Snow grains",
        label: "Snow Grains",
        icon: "snow_grains",
    },

    80: {
        condition: "rain_showers",
        description: "Slight rain showers",
        label: "Slight Rain Showers",
        icon: "rain_showers_light",
    },

    81: {
        condition: "rain_showers",
        description: "Moderate rain showers",
        label: "Moderate Rain Showers",
        icon: "rain_showers_moderate",
    },

    82: {
        condition: "rain_showers",
        description: "Violent rain showers",
        label: "Violent Rain Showers",
        icon: "rain_showers_violent",
    },

    85: {
        condition: "snow_showers",
        description: "Slight snow showers",
        label: "Slight Snow Showers",
        icon: "snow_showers_light",
    },

    86: {
        condition: "snow_showers",
        description: "Heavy snow showers",
        label: "Heavy Snow Showers",
        icon: "snow_showers_heavy",
    },

    95: {
        condition: "thunderstorm",
        description: "Slight or moderate thunderstorm",
        label: "Thunderstorm",
        icon: "thunderstorm",
    },

    96: {
        condition: "thunderstorm_hail",
        description: "Thunderstorm with slight hail",
        label: "Thunderstorm with Slight Hail",
        icon: "thunderstorm_hail_light",
    },

    99: {
        condition: "thunderstorm_hail",
        description: "Thunderstorm with heavy hail",
        label: "Thunderstorm with Heavy Hail",
        icon: "thunderstorm_hail_heavy",
    },
};

export const getWeatherDetail = async (location) => {
    const {name, longitude, latitude} =location;

    // 

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,rain,precipitation,showers,snowfall,weather_code,wind_speed_10m,surface_pressure,pressure_msl`;

    const res = await axios.get(url);
    const data = res.data
    const  weather =data.current;
    const weatherUnit = data.current_units;
    const code = weather.weather_code
    const weatherType = WMO_CODES[code]
    
    // console.log(weatherType);

    // console.log('weather', weather, 'weatherUnit', weatherUnit);

    return {
        name,
        temperature : [weather.temperature_2m, weatherUnit.temperature_2m],
        feelsLike : [weather.apparent_temperature, weatherUnit.apparent_temperature],
        rain : [weather.rain, weatherUnit.rain],
        pressure : [weather.pressure_msl, weatherUnit.pressure_msl],
        humadity : [weather.relative_humidity_2m, weatherUnit.relative_humidity_2m],
        windSpeed : [weather.wind_speed_10m, weatherUnit.wind_speed_10m],
        condition : weatherType.condition,
        description: weatherType.description,
        label : weatherType.label,
        icon : weatherType.icon,
    }
}