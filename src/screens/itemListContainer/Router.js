import ItemListContainer  from "../../components/itemListContainer/ItemList/ItemList";
import NavBar from "../../components/NavBar/NavBar"
import ItemDetails from "../../components/itemDetailContainer/itemDetail/itemDetail";
import { BrowserRouter,Routes,Route } from "react-router-dom";

const Router=()=>{
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/*" element={<div>element not found error 404</div>}></Route>
                <Route path="/category/:categoria" element={<ItemListContainer/>}></Route>
                <Route path="/nombre/:nombre" element={<ItemDetails/>}></Route>
                <Route path="/id/:idProducto" element={<ItemDetails/>}></Route>

            </Routes>
        </BrowserRouter>
    );

}

export default Router