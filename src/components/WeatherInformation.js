import "./../styles/WeatherInfo.scss";

const WeatherInformation = ({ location, temperature, conditions }) => {
  return (
    <div className="weather-info-wrapper">
      <h2>
        The weather in {location} is currently {temperature} with {conditions}{" "}
        conditions{" "}
      </h2>
    </div>
  );
};

export default WeatherInformation;
