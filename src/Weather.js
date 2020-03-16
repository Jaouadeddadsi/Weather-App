import React from "react";
import PropTypes from "prop-types";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function Weather({ item }) {
  const color = item.weather === "sun" ? "orange" : "#ccc";
  const style = { color: color };
  return (
    <div className="weather">
      <div className="day">{item.day}</div>
      <div className="icon" style={style}>
        <FontAwesomeIcon icon={item.weather} />
      </div>
      <div className="temp">
        <span className="tempMax">{item.temp_max}</span>
        <span className="tempMin">{item.temp_min}</span>
      </div>
    </div>
  );
}

Weather.propTypes = {
  item: PropTypes.object.isRequired
};

export default Weather;
