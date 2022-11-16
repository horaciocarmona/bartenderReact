
import "./cartList.scss"
import {useContext} from "react"
import ItemCart from "../../components/itemCartContainer/itemCart/itemCart"
import {cartContext} from "../../context/cartContext"
import Button from 'react-bootstrap/Button';

const CartList=()=>{
    const {cart}=useContext(cartContext);
    const {totalCantidadCarrito}=useContext(cartContext);
    const {totalImporteCarrito}=useContext(cartContext);
    const {removeToCart}=useContext(cartContext);
    const {emptyToCart}=useContext(cartContext);

    const handleOnRemove=(producto)=>{
       removeToCart({id:producto.id,cantidad:producto.cantidad,precioVentaUnitario:producto.precio});
    }   

    return(
        <div className="Principalcontainer">
                <h1>Carrito</h1>
                <h2>Total unidades {totalCantidadCarrito} Importe total ${totalImporteCarrito} </h2>
                <div className="cards-principal">
                {
                 cart.map((producto,i) => ( 
                    <ItemCart key={i}
                           id={producto.id}
                           nombre={producto.descripcionProducto}
                           precio={producto.precioVentaUnitario}
                           cantidad={producto.cantidad}
                           stockProducto={producto.stockProducto}
                           handleOnRemove={handleOnRemove}
                    />
                 ))
                } 
                </div> 
                <Button onClick={emptyToCart}>Vaciar Carrito</Button>
            </div>
       
    )
}

export default CartList;
