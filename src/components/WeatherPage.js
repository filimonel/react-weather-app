import "./../styles/Hot.scss";
import "./../styles/Cold.scss";
import "./../styles/Rain.scss";
import "./../styles/Perfect.scss";
import { Link } from "react-router-dom";
import WeatherInformation from "./WeatherInformation";

const WeatherPage = ({ className, location, temperature, conditions }) => {
  return (
    <div className={className}>
      <WeatherInformation
        location={location}
        temperature={temperature}
        conditions={conditions}
      />
      <Link to="/" >Back</Link>
    </div>
  );
};

export default WeatherPage;