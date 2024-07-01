import { useContext } from "react";
import { ParamContext } from "../../contexts/paramcontext";

const CategoryItem = (props) => {
  const { category } = props;
  const { Param, addToParam } = useContext(ParamContext);

  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
      <div onClick={addToParam} className="category-body-container">
        <h2>{category.title}</h2>
        <p>shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
