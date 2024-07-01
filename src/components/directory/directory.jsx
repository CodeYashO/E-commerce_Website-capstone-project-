import CategoryItem from "../components-item/category-item"
import "../components-item/category-item.scss"

const Directory = (props)=>{
    const {categories} = props;
    return (
    <div className = "categories-container">
    {
      categories.map( (category)=>{
       return <CategoryItem key={category.id}  category = {category}/> 
      })
    }
  </div>
    )
}

export default Directory;
