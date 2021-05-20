const WeatherInformation = ({ location, temperature, conditions }) => {
  return (
    <div>
      <h2>
        The weather in {location} is currently {temperature} with {conditions}{" "}
        conditions{" "}
      </h2>
    </div>
  );
};

export default WeatherInformation;
