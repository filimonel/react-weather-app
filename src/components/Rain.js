import "./../styles/Rain.scss";
import WeatherInformation from "./WeatherInformation";

const Rain = () => {
  return (
    <div className="rain-wrapper">
      <WeatherInformation
        location="Melbourne"
        temperature="14"
        conditions="Rainy"
      />
    </div>
  );
};

export default Rain;
