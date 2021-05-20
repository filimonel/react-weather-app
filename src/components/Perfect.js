import "./../styles/Perfect.scss";
import WeatherInformation from "./WeatherInformation";

const Perfect = () => {
  return (
    <div className="perfect-wrapper">
      <WeatherInformation
        location="Melbourne"
        temperature="21"
        conditions="Sunny"
      />
    </div>
  );
};

export default Perfect;
