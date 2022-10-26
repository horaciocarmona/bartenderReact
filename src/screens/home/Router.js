import Home  from "../home/home";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"; 
import NavBar from "../../components/NavBar/NavBar"
import ProductDetails from "../productDetails/ProductDetails";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const Router=()=>{
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/*" element={<div>element not found error 404</div>}></Route>
                <Route path="/category/:categoria" element={<Home/>}></Route>
                <Route path="/nombre/:nombre" element={<ProductDetails/>}></Route>
                <Route path="/id/:idProducto" element={<ProductDetails/>}></Route>

            </Routes>
        </BrowserRouter>
    );

}

export default Router