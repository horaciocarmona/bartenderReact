import "./CartWidget.scss"
import ItemCart from "../CartWidget/ItemCart"; 
const CartWidget=()=>{
    return(
        <div className="itemCart">
            <ItemCart
                imagen="https://i.ibb.co/gwzNGhN/carrito-de-compras.png"
            />
        </div>
    )
}


export default CartWidget;