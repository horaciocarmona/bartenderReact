import "./ItemListContainer.scss"
import {useState,useEffect} from "react"
import Cards from "../../components/home/cards/Cards"
import productosApi from "../ApiRest/productosApi"
import {useParams} from "react-router-dom"

const ItemListContainer=()=>{
    const [filter,setFilter]=useState("");
    const [listadoProductos,setListadoProductos]=useState([]);
    const {categoria}=useParams();
    const [numberCount,setNumberCount]=useState(0);

    // console.log(productosApi());
    const getProductos = async() => {
        const productos = await productosApi();
        setListadoProductos(productos);
    };
    useEffect(()=>{getProductos()},[]);
    useEffect(()=>{setNumberCount(numberCount)},[numberCount]);

    return(
        <div className="Principalcontainer">
                <h1>Producto</h1>
                <input id="filter" name="filter" type="text" value={filter} onChange={(event)=>setFilter(event.target.value)}></input>
                <div className="cards-principal">
                {categoria? 

                 listadoProductos.filter((producto)=>producto.nombre.includes(filter)).filter((producto)=>producto.category===categoria).map((producto,i) => (

                    <>
                    <Cards key={i}
                           id={producto.id}
                           categoria={producto.category}
                           nombre={producto.nombre}
                           imagen={producto.imagen}
                           precio={producto.precio}
                           numberCount={numberCount}

                    />
                    </>
                 ))
                : 
                listadoProductos.filter((producto)=>producto.nombre.includes(filter)).map((producto,i) => (
                    <Cards key={i}
                           id={producto.id}
                           categoria={producto.category}
                           nombre={producto.nombre}
                           imagen={producto.imagen}
                           precio={producto.precio}
                           numberCount={numberCount}
                    />
                 ))
               
                }
                </div> 
            
            </div>
       
    )
}

export default ItemListContainer;