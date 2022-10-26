import "./products.scss"
import {useParams} from "react-router-dom"
import {useState,useEffect} from "react"
import {getProductoById} from "../../components/ApiRest/productosApi"

const ProductDetails=()=>{
    const {idProducto}=useParams();
    const [producto,setProducto]=useState({});
    useEffect(()=>{setProducto(getProductoById(idProducto))},[]);
    return(
        <div>
            {producto.descripcionProducto}
        </div>
    )
}
export default ProductDetails;
