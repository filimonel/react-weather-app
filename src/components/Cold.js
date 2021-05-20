import "./../styles/Cold.scss";
import WeatherInformation from "./WeatherInformation";

const Cold = () => {
  return (
    <div className="cold-wrapper">
      <WeatherInformation
        location="Melbourne"
        temperature="20"
        conditions="Cold"
      />
    </div>
  );
};

export default Cold;
