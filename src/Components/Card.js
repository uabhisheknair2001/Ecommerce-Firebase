import React from "react";
import "./Card.css";
import carddd from "../Images/carddd.png";
import cardd from "../Images/cardd.png";

const Card = () => {
  return (
    <div className="main-card">
      <div className="card mb-3">
        <img src={carddd} className="card-img-top" alt="card1" />
        <div className="card-body">
          <h5 className="card-title">ANALOG WATCHES</h5>
          <p className="card-text">
            An analog watch is one in which the display is not digital, but is
            indicated (typically) by the continuous motion of one, two, or three
            rotating pointers or hands pointing to numbers arrayed on a circular
            dial
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
      <div className="card mb-3">
        <img src={cardd} className="card-img-top" alt="card2" />
        <div className="card-body">
          <h5 className="card-title">DIGITAL WATCHES</h5>
          <p className="card-text">
          With the ability to record time elapsed and distance traveled, digital watches make it easy to track your workouts. Whether you run every day or spend hours in the gym, your digital watch can track your progress and help you set goals to keep improving. Some digital watches can also monitor your heart rate.
          </p>
          <p className="card-text">
            <small className="text-body-secondary">
              Last updated 3 mins ago
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
