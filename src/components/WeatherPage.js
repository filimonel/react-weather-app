import "./../styles/weatherClasses.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import WeatherInformation from "./WeatherInformation";

const WeatherPage = ({
  className,
  location,
  temperature,
  conditions,
  homePath,
}) => {
  const [path, setPath] = useState("Melbourne");

  return (
    <div className={className}>
      <WeatherInformation
        location={location}
        temperature={temperature}
        conditions={conditions}
      />
      <Link to="/" onClick={() => homePath(path)}>
        Back
      </Link>
    </div>
  );
};

export default WeatherPage;
