import "./Carousel.css";
import React from "react";
import Card from "../Card/Card";

function Carousel({ items }) {
  return (
    <div className="row justify-content-center">
      <div className="home__card-content">
        <div className="home__card-list">
          <div className="inner">
            {items?.map((items, index) => {
              return (
                <Card
                  key={index}
                  cardText={items?.description}
                  tagText={items?.tag}
                  srcImage={items?.image}
                  colorText={items?.color}
                  misc={items?.misc}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
