import { useContext } from "react";
import Home from "./routes/home/home.component";
import { Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import SignIn from "./routes/sign/sign";
import Shop from "./shop/shop.jsx";
import CheckOut from "./components/components-item/checkOut/checkOut";
import { TitleContext } from "./contexts/titleContext";
import CategoryPreview from "./components/categoryPreview/categorypreview";


const App = () => {
  const {Title , addTitle} = useContext(TitleContext);
  console.log(Title)
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route path="checkout" element={<CheckOut/>}/>
        <Route index={true} element={<Home/>} />
        <Route path="shop" element={<Shop/>}/>
        <Route path={`shop/:Title_param`} element={<CategoryPreview/>}/>
        <Route path="sign-in" element={<SignIn/>} />
      </Route>
    </Routes>
  );
};
 
export default App;
