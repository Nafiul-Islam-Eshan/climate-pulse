export const getGeoLocaton = async (city) => {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${city}+&count=1&language=en&format=json`;

  const res = await fetch(url);
  const data = await res.json();
  return data;
};
