import "./Home.scss";
import Carousel from "../../components/carousel/Carousel";
import Categories from "../../components/categories/Categories";
import Recommendation from "../../components/recommendation/Recommendation";

const Home = () => {
  return (
    <div className="home bg-gray-50">
      <Carousel />
      <Categories />
      <Recommendation />
    </div>
  );
};

export default Home;
