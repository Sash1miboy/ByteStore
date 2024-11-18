import { Link } from "react-router-dom";
import { categoriesProduct } from "../../data/dummyCategories";
import "./Categories.scss";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container rounded-md">
        <div className="header bg-[#02A9F7]">
          <img src="/Category-Icon.svg" alt="" />
          Categories
        </div>
        <div className="content">
          {categoriesProduct.map((category) => (
            <div className="catItems" key={category.id}>
              <Link
                to={`/category/${category.catName
                  .toLowerCase()
                  .replace(" ", "-")}`}
                className="link catContent"
              >
                <div className="box bg-[#02A9F7]">
                  <img src={category.image} alt={category.image} />
                </div>
                <div className="catName">{category.catName}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
