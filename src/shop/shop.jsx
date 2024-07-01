import { Fragment, useContext } from "react";
import { CategoriesContext } from "../contexts/categoriesContext";
import ProductCard from "../components/product_card/product_card";
import {TitleContext} from "../contexts/titleContext";
import "./shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const {Title , addTitle} = useContext(TitleContext);
  console.log(categoriesMap);
  console.log(Title);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <Fragment>
            <h1 onClick={addTitle}>{title}</h1>
            <div className="products-container">
              {categoriesMap[title].map((product) => { 
                return <ProductCard key={product.id} product={product} />;
              })}
            </div>
            <br />
          </Fragment>
        );
      })}
    </Fragment>
  );
};

export default Shop;
