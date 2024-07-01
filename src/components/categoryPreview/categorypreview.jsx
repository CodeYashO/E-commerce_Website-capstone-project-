import { useContext } from "react";
import { TitleContext } from "../../contexts/titleContext";
import { Fragment } from "react";
import ProductCard from "../product_card/product_card";
import { CategoriesContext } from "../../contexts/categoriesContext";
import "./categorypreview.scss";
import { useParams } from "react-router-dom";

const CategoryPreview = () => {
  let { Title, addTitle } = useContext(TitleContext);
  const { categoriesMap } = useContext(CategoriesContext);
  const {Title_param} = useParams();

  console.log(Title);
  console.log(Title_param);
  // console.log(categoriesMap); 
  return (

    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        if (Title_param === title) {
          return (
            <div>
              <h1 className="title">{title.toLocaleUpperCase()}</h1>
              <div className="products-Preview-container">
                {categoriesMap[title].map((product) => {
                  return <ProductCard key={product.id} product={product} />;
                })} 
              </div>
            </div>
          );
        }
      })}
    </Fragment>
  );
};

export default CategoryPreview;
