import {createContext,useState,useContext} from "react";
export const cartContext = createContext({
    cart:[],
    isInCart: ()=>{},
    addToCart: ()=>{}                                   
}) //Cree el contexto, que seria como la caja "global" (de momento vacia) que voy a compartir entre los componentes

export default function CartProvider ({children}) {
    const [cart, setCart] = useState([]);
    const getFromCart=(id)=>{return cart.find(ord =>ord.id===id)};                                                                  
    const isInCart= (id) =>{ return id !== undefined ? getFromCart(id):undefined};
    const [total, setTotal] = useState(3)
    const vaciarCarrito = () => {
        setCart([])
        setTotal(0)
    }
 
    const addToCart=(obj)=>{
       if (isInCart(obj) && obj.id){
         console.log("ya existe");
          const productoExistente=getFromCart(obj.id); 
          productoExistente.cantidad=obj.cantidad; 
         return
       }


       console.log("nuevo producto "+obj.descripcionProducto);

    //   setCart([...cart],obj);
       setCart([...cart,obj]);
       console.log("ingreso al carrito con stock"+obj.stockProducto)
       console.log(...cart)
    }
    
    return (
        <cartContext.Provider value={{cart,addToCart,isInCart,vaciarCarrito}}>
            {children}
        </cartContext.Provider>
    )
}

