import {createContext,useState} from "react";
export const cartContext = createContext({
    cart:[],
    isInCart: ()=>{},
    addToCart: ()=>{},
    removeToCart: ()=>{},
    totalCantidadCarrito:0,
    totalImporteCarrito:0.00                                   
}) //Cree el contexto, que seria como la caja "global" (de momento vacia) que voy a compartir entre los componentes

export default function CartProvider ({children}) {
    const [cart, setCart] = useState([]);
    const [totalCantidadCarrito, setTotalCantidadCarrito] = useState(0);
    const [totalImporteCarrito, setTotalImporteCarrito] = useState(0.00);
    const getFromCart=(id)=>{return cart.find(ord =>ord.id===id)};                                                                  
    const isInCart= (id) =>{ return id !== undefined ? getFromCart(id):undefined};
    const vaciarCarrito = () => {
        setCart([]);
        setTotalCantidadCarrito(0);
        setTotalImporteCarrito(0.00);
    }
 
    const addToCart=(obj)=>{
       if (isInCart(obj.id) && obj.id){
          console.log("ya existe, ya existe");
          const productoExistente=getFromCart(obj.id); 
          productoExistente.cantidad+=obj.cantidad; 
          setTotalCantidadCarrito(totalCantidadCarrito+obj.cantidad)  
          setTotalImporteCarrito(totalImporteCarrito+(obj.cantidad*obj.precioVentaUnitario))  
          setCart([...cart]);
          return
       }


       console.log("nuevo producto "+obj.descripcionProducto);
       setCart([...cart,obj]);
       console.log("ingreso al carrito con stock"+obj.stockProducto)
       setTotalCantidadCarrito(totalCantidadCarrito+obj.cantidad)  
       setTotalImporteCarrito(totalImporteCarrito+(obj.cantidad*obj.precioVentaUnitario))  
       console.log(totalCantidadCarrito)
       console.log(totalImporteCarrito)
    }

    const removeToCart=(obj)=>{
        if (isInCart(obj.id) && obj.id){
            console.log("existe, se elimina ");
            console.log(totalCantidadCarrito)
            console.log(obj.cantidad);
            setTotalCantidadCarrito(totalCantidadCarrito-obj.cantidad)  
            setTotalImporteCarrito(totalImporteCarrito-(obj.cantidad*obj.precioVentaUnitario))  
            cart.map((producto,i) => (producto.id===obj.id ? cart.splice(i,1) : undefined ));  
            setCart([...cart]);
            return
        }
 
     }
     
    return (
        <cartContext.Provider value={{cart,addToCart,isInCart,vaciarCarrito,removeToCart,totalCantidadCarrito,totalImporteCarrito}}>
            {children}
        </cartContext.Provider>
    )
}

