import React from "react";
import "./room.css";

function Room() {
  const [islit, setlit] = React.useState(true);
  const onstate = islit ? "ON" : "OFF";
  const [temp, settemp] = React.useState(72);

  return (
    <div className={`room ${islit ? "ON" : "OFF"}`}>
      <b>the light is {onstate}</b>
      <br />
      <button
        onClick={() => {
          setlit(true);
        }}
      >
        ON
      </button>
      <button
        onClick={() => {
          setlit(false);
        }}
      >
        OFF
      </button>
      <br />
      <p>
        <b>current tempurature of the room is temp:{temp} fahrenheit</b>
        <br />
      </p>
      <button
        onClick={() => {
          settemp(temp + 1);
        }}
      >
        increase temp
      </button>
      <button
        onClick={() => {
          settemp(temp - 1);
        }}
      >
        decrease temp
      </button>
    </div>
  );
}
export default Room;
