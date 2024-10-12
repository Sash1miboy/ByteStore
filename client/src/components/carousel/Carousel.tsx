import "./Carousel.scss";
import { Carousel as FlowbiteCarousel } from "flowbite-react";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="container ">
        <FlowbiteCarousel
          className="flowbiteCarousel xl:h-[36rem] lg:h-[30rem] md:h-[24rem] sm:h-[18rem] h-[12rem]"
          indicators={false}
        >
          <img src="/carousel-1.webp" alt="" />
          <img src="/carousel-2.webp" alt="" />
          <img src="/carousel-3.webp" alt="" />
        </FlowbiteCarousel>
      </div>
    </div>
  );
};

export default Carousel;
