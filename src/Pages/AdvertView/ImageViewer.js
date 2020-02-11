import React, { useState } from "react";
import { Carousel, Image } from "react-bootstrap";
import house1 from "./Assets/house1.jpg";
import house2 from "./Assets/house2.jpg";
import house3 from "./Assets/house3.jpg";
import house4 from "./Assets/house4.jpg";
import ArrowFowardIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIcon from "@material-ui/icons/ArrowBackIosOutlined";

export default function ImageViewer() {
  const [index, setindex] = useState();
  const handleSelect = newIndex => {
    setindex(newIndex);
  };

  return (
    <div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={<ArrowBackIcon style={navIcons} />}
        nextIcon={<ArrowFowardIcon style={navIcons} />}
        interval={null}>
        {/* map item */}
        <Carousel.Item>
          <Image src={house1} style={carouselImage} />
          <Carousel.Caption>HOUSE</Carousel.Caption>
        </Carousel.Item>
        {/* map item */}
        <Carousel.Item>
          <Image src={house2} style={carouselImage} />
          <Carousel.Caption>HOUSE</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={house3} style={carouselImage} />
          <Carousel.Caption>HOUSE</Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={house4} style={carouselImage} />
          <Carousel.Caption>HOUSE</Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

const carouselImage = {
  width: "100%",
  height: "70vh",
  objectFit: "cover"
};

const navIcons = {
  color: "white",
  fontSize: "3rem"
};
