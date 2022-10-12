import "./ItemListContainer.scss"
import Cards from "./Cards.js"

const listaProductos=[{descripcionProducto:"Ron Avana Club clasico 700ml",precioVentaUnitario:6300,stockProducto:165,img:"https://i.ibb.co/Bg4h1Lh/bombaybramle.png",id:1,cantidad:0,pais:"FI"},
    {descripcionProducto:"Campari 750ml",precioVentaUnitario:1800,stockProducto:3,img:"https://i.ibb.co/nLWSGVq/campari.png",id:2,cantidad:0,pais:"MX"},
    {descripcionProducto:"Gin Bombay Bramble 700",precioVentaUnitario:3800,stockProducto:150,img:"https://i.ibb.co/Bg4h1Lh/bombaybramle.png",id:3,cantidad:0,pais:"AR"},
    {descripcionProducto:"Capel reservado clasico 700ml",precioVentaUnitario:4200,stockProducto:300,img:"https://i.ibb.co/Sn3116s/capelreservadotransparente-Copy.png" ,id:4,cantidad:0,pais:"BZ"},
    {descripcionProducto:"Negroni 750ml",precioVentaUnitario:5000,stockProducto:190,img:"https://i.ibb.co/BCDVhRZ/negroni14.png",pais:"US"},
    {descripcionProducto:"Heraclito clasico 700ml",precioVentaUnitario: 4500,stockProducto:180,img:"https://i.ibb.co/gmPYvrJ/heraclitolondondry.png",id:6,cantidad:0,pais:"BR"},
    {descripcionProducto:"Whisky Jack Daniels 750ml",precioVentaUnitario:12000,stockProducto:178,img:"https://i.ibb.co/Hhd6kgv/whiskyjackdaniels.jpg",id:7,cantidad:0,pais:"FI"},
    {descripcionProducto:"Puerto de Indias clasico 700ml",precioVentaUnitario:6300,stockProducto:165,img:"https://i.ibb.co/pRVjpBw/puertodeindiasclasic.png",id:8,cantidad:0,pais:"AR"}]


const ItemListContainer=()=>{
    return(
            <div className="cards-principal">{
                listaProductos.map((producto,i) => (
                <Cards key={i}
                    nombre={producto.descripcionProducto}
                    imagen={producto.img}
                    precio={producto.precioVentaUnitario}
                />
                ))
            }
            </div>
        
    )
}

export default ItemListContainer;