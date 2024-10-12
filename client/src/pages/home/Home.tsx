import "./Home.scss";
import Carousel from "../../components/carousel/Carousel";
import Categories from "../../components/categories/Categories";

const Home = () => {
  return (
    <div className="home bg-gray-25">
      <Carousel />
      <Categories />
    </div>
  );
};

export default Home;
