import "./itemDetail.scss"
import {useParams} from "react-router-dom"
import {useState,useEffect,useContext} from "react"
import {getProductoById} from "../../ApiRest/productosApi"
import ItemCount from "../itemDetail/ItemCount/ItemCount"
import { cartContext } from "../../../context/cartContext"

const ItemDetails=()=>{
    const {cart}=useContext(cartContext); 
    const {addToCart}=useContext(cartContext);
    const subirAlCarrito=(obj)=>{
        addToCart({id:obj.id,cantidad:obj.cantidad,descripcionProducto:obj.descripcionProducto,precioVentaUnitario:obj.precioVentaUnitario,stockProducto:obj.stockProducto});
    } 
    
    const {idProducto}=useParams();
    const [item,setProducto]=useState({});
    function handleOnAdd(cantidad){
            // if (item.InSTock) {
                console.log( `se agregaron unidades ${cantidad}`);
                item.cantidad=cantidad;
                subirAlCarrito(item);
                // }
    }

 
    useEffect(()=>{setProducto(getProductoById(idProducto))},[]);
   

    return(
        <div className="product-container">
            <>
            <h3>{item.descripcionProducto}</h3>
            <img src={item.img} width="100" height="200" alt="imagen Card"/>
            <p> Precio: {item.precioVentaUnitario}</p>
            <p> Stock: {item.stockProducto}</p>
            <p> Id: {item.id}</p>
            </>
            <ItemCount
                handleOnAdd={handleOnAdd}
                stockProducto={item.stockProducto}    
            />
            
        </div>
    )
}
export default ItemDetails;
