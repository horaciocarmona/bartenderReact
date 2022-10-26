import "./itemDetail.scss"
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {getProductoById} from "../../ApiRest/productosApi"
import ItemCount from "../itemDetail/ItemCount/ItemCount"

const ItemDetails=()=>{
    const {idProducto}=useParams();
    const [producto,setProducto]=useState({});
    const [stockProducto,setStockProducto]=useState(0);
    useEffect(()=>{setProducto(getProductoById(idProducto))},[]);
    return(
        <div className="product-container">
            <h3>{producto.descripcionProducto}</h3>
            <img src={producto.img} width="100" height="200" alt="imagen Card"/>
            <p> Precio: {producto.precioVentaUnitario}</p>
            <p> Stock: {producto.stockProducto}</p>

            <ItemCount
                stockProducto={producto.stockProducto}    
            />

        </div>
    )
}
export default ItemDetails;
