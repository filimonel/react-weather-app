import "./../styles/Cold.scss";
import WeatherInformation from "./WeatherInformation";

const Cold = () => {
  return (
    <div className="cold-wrapper">
      <WeatherInformation
        location="Melbounre"
        temperature="20"
        conditions="Cold"
      />
    </div>
  );
};

export default Cold;
