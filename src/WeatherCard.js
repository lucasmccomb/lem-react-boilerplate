import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard.scss";

const ZIP_CODE = "06098";

const WeatherCard = () => {
  const [weatherInfo, setWeatherInfo] = useState({});

  useEffect(() => {
    const parseCurrentWeatherResponse = (responseData) => ({
      temp: responseData.main.temp,
      feels_like: responseData.main.feels_like,
      wind_speed: responseData.wind.speed,
      wind_dir: responseData.wind.deg,
      humidity: responseData.main.humidity,
      clouds: responseData.clouds.all,
      general: responseData.weather[0].description,
      location_name: responseData.name,
      icon_code: responseData.weather[0].icon,
    });
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?zip=${ZIP_CODE}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=imperial`
      )
      .then((response) => {
        const weatherInfo = parseCurrentWeatherResponse(response.data);
        setWeatherInfo(weatherInfo);
      });
  }, [setWeatherInfo]);

  const parseCloudInt = (cloudString) => {
    const cloudInt = parseInt(cloudString);
    let cloudiness = "clear";
    if (cloudInt > 95) {
      cloudiness = "overcast";
    } else if (cloudInt > 80) {
      cloudiness = "mostly cloudy";
    } else if (cloudInt < 80 && cloudInt > 40) {
      cloudiness = "partially cloudy";
    } else if (cloudInt < 40) {
      cloudiness = "mostly clear";
    } else if (cloudInt < 5) {
      cloudiness = "blue skies";
    }
    return cloudiness;
  };

  const parseWindDir = (windDir) => {
    let compassDir = "N";
    if (windDir >= 22.5 && windDir < 67.5) {
      compassDir = "NE";
    } else if (windDir >= 67.5 && windDir < 112.5) {
      compassDir = "E";
    } else if (windDir >= 112.5 && windDir < 157.5) {
      compassDir = "SE";
    } else if (windDir >= 157.5 && windDir < 202.5) {
      compassDir = "S";
    } else if (windDir >= 202.5 && windDir < 247.5) {
      compassDir = "SW";
    } else if (windDir >= 247.5 && windDir < 292.5) {
      compassDir = "W";
    } else if (windDir >= 292.5 && windDir < 337.5) {
      compassDir = "NW";
    }
    return compassDir;
  };

  return (
    <div className="WeatherCard-wrap">
      <h2>Weather in {weatherInfo.location_name}</h2>
      <section>
        {weatherInfo.general ? (
          <div className="card-body">
            <h5 className="card-title">
              {Math.round(weatherInfo.temp)}˚F • {weatherInfo.general}
            </h5>
            <div className="card-text">
              <ul className="fwf__weatherInfoCard--list">
                <li>feels like: {Math.round(weatherInfo.feels_like)}˚F</li>
                <li>
                  wind: {Math.round(weatherInfo.wind_speed)} mph{" "}
                  {parseWindDir(weatherInfo.wind_dir)}
                </li>
                <li>humidity: {weatherInfo.humidity}%</li>
                <li>sky: {parseCloudInt(weatherInfo.clouds)}</li>
              </ul>
              <div className="fwf__img--wrap fwf__img--wrap-lg">
                <img
                  src={`https://openweathermap.org/img/wn/${weatherInfo.icon_code}@2x.png`}
                  width="100px"
                  height="100px"
                  alt=""
                />
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
};

export default WeatherCard;
