import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const WeatherContext = createContext();

export const useWeatherContext = () => useContext(WeatherContext);

export const WeatherProvider = (props) => {
  const [submitCity, setSubmitCity] = useState("Addis Ababa");
  const [city, setCity] = useState({
    id: 6,
    name: "Addis Ababa",
    latitude: "39.9208",
    longitude: "32.8541",
    population: 5270575,
    region: "Addis Ketema",
  });

  const [current, setCurrent] = useState({});
  const [daily, setDaily] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      url: `http://api.weatherstack.com/current?access_key=a70adbd58098858f54c5964a78d463a8&query=${submitCity}`,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setCity(response.data.location);
        setCurrent(response.data.current);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setSubmitCity,
        setCity,
        current,
        setCurrent,
        daily,
        setDaily,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
