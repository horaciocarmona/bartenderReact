import "./itemDetail.scss"
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {getProductoById} from "../../ApiRest/productosApi"
import ItemCount from "../itemDetail/ItemCount/ItemCount"

const ItemDetails=()=>{
    const {idProducto}=useParams();
    const [producto,setProducto]=useState({});
    useEffect(()=>{setProducto(getProductoById(idProducto))},[]);
    return(
        <div>
            <h3>{producto.descripcionProducto}</h3>
            <ItemCount/>
        </div>
    )
}
export default ItemDetails;
