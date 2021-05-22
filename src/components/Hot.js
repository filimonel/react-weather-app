import "./../styles/Hot.scss";
import WeatherInformation from "./WeatherInformation";

const Hot = ({ location, temperature, conditions }) => {
  return (
    <div className="hot-wrapper">
      <WeatherInformation
        location={location}
        temperature={temperature}
        conditions={conditions}
      />
    </div>
  );
};

export default Hot;