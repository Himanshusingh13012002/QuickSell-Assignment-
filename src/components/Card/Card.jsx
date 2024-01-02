import React from "react";
import { GoKebabHorizontal } from "react-icons/go";
import "./Card.css";
import img from './user.jpg';
const Card = ({ id, title, tag }) => {
  return (
    <div className="cardContainer flex-gap-10" style={{ gap: "5px" }}>
      <div className="cardHeading flex-sb">
        <span style={{ textTransform: "uppercase" }} className="color-grey">
          {id}
        </span>
        <div
          className="imageContainer relative"
          style={{ width: "16px", height: "16px" }}
        >
          <img
            className="card-img"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            src={img}
            alt="UserImage"
          />
          <div className="showStatus"></div>
        </div>
      </div>
      <div className="cardTitle" style={{ fontWeight: 200 }}>
        <p>{title}</p>
      </div>
      <div className="cardTags">
        <div className="tags color-grey">
          <GoKebabHorizontal />
        </div>
        {tag?.map((elem, index) => {
          return (
            <div key={index} className="tags color-grey">
              {" "}
              <span className="dot">•</span> {elem}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
