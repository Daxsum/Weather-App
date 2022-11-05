import { useWeatherContext } from "../../contexts/WeatherContext";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { useState } from "react";

export function WeatherSide() {
  const { city, current, setSubmitCity } = useWeatherContext();
  const [value, setValue] = useState("Addis Ababa");

  if (!current) return <div>Loading...</div>;
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitCity(value);
  };
  return (
    <div className="weather-side">
      <div className="date-container">
        <h2 className="date-dayname">Monday</h2>
        <span className="date-day">{city.localtime}</span>
        <span>
          <HiOutlineLocationMarker color="white" className="location-icon" />
        </span>
        <span className="location">{city.country}</span>
      </div>
      <div className="weather-container">
        <form className="container">
          <label className="label">
            City:
            <input
              className="container location input"
              type="text"
              name="name"
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </label>
          <input
            onClick={() => handleSubmit(value)}
            className="container submit"
            type="submit"
            value="Submit"
          />
        </form>
        <h1 className="weather-temp">{city.name}</h1>
        <h1 className="weather-temp">{current.temperature}°C</h1>

        {/* <img className="container  " src={current.weather_icons[0]} /> */}

        <h3 className="">{current.weather_descriptions}</h3>
        <h3 className="">
          {current.is_day == "no" ? "Good Night" : "Good Morning"}
        </h3>
      </div>
    </div>
  );
}
