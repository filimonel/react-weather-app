import "./../styles/Hot.scss";
import { Link } from "react-router-dom";
import WeatherInformation from "./WeatherInformation";

const Hot = ({ location, temperature, conditions }) => {
  return (
    <div className="hot-wrapper">
      <WeatherInformation
        location={location}
        temperature={temperature}
        conditions={conditions}
      />
      <Link to="/">Back</Link>
    </div>
  );
};

export default Hot;