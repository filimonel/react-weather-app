import "./../styles/Hot.scss";
import WeatherInformation from "./WeatherInformation";

const Hot = () => {
  return (
    <div className="hot-wrapper">
      <WeatherInformation
        location="Melbounre"
        temperature="36"
        conditions="Hot"
      />
    </div>
  );
};

export default Hot;
