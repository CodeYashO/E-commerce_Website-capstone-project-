import { useEffect } from "react";
import { createContext , useState } from "react";
import SHOP_DATA from "../shop_data.js";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";
 
export const CategoriesContext = createContext({
    categoriesMap : {},
})

export const CategoriesProvider = ({children})=>{
    const [categoriesMap , setcategoriesMap] = useState({});

    // useEffect(()=>{
    //     addCollectionAndDocuments("categories" , SHOP_DATA);
    // }, [])

    // IN USEEFFECT FUNCTION ASYNC CANT BE APPLIED 
    useEffect(()=>{
        const getCategoriesMap = async()=>{
            const categoryMap = await getCategoriesAndDocuments();
            console.log(categoryMap);
            setcategoriesMap(categoryMap)
        }
        getCategoriesMap();
    }, [])
 
    const value = {categoriesMap};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}
 