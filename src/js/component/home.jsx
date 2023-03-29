import React, { useState } from "react";

const TrafficLight = () => {
  const [color, setColor] = useState("red");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  const redClass = color === "red" ? "selected" : "";
  const yellowClass = color === "yellow" ? "selected" : "";
  const greenClass = color === "green" ? "selected" : "";

  return (
    <div className="traffic-light">
      <div
        className={"light red " + redClass}
        onClick={() => handleClick("red")}
      />
      <div
        className={"light yellow " + yellowClass}
        onClick={() => handleClick("yellow")}
      />
      <div
        className={"light green " + greenClass}
        onClick={() => handleClick("green")}
      />
    </div>
  );
};

const Home = () => {
  const [showTrafficLight, setShowTrafficLight] = useState(false);

  const handleButtonClick = () => {
    setShowTrafficLight(!showTrafficLight);
  };

  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Traffic Light App</h1>
      {showTrafficLight ? <TrafficLight /> : null}
      <button className="btn btn-success" onClick={handleButtonClick}>
        {showTrafficLight ? "Hide" : "Show"} Traffic Light
      </button>
    </div>
  );
};

export default Home;
