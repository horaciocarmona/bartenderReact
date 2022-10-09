import "./ItemListContainer.scss"
const listaProductos=[{"descripcionProducto":"Ron Avana Club clasico 700ml","precioVentaUnitario":6300,"stockProducto":165,img:"https://ibb.co/wKp93m7","id":1,"cantidad":0,"pais":"FI"},
    {"descripcionProducto":"Campari 750ml","precioVentaUnitario":1800,"stockProducto":3,img:"https://ibb.co/wKp93m7","id":2,"cantidad":0,"pais":"MX"},
    {"descripcionProducto":"Gin Bombay Bramble 700","precioVentaUnitario":3800,"stockProducto":150,img:"https://ibb.co/wKp93m7","id":3,"cantidad":0,"pais":"AR"},
    {"descripcionProducto":"Capel reservado clasico 700ml","precioVentaUnitario":4200,"stockProducto":300,img:"https://ibb.co/wKp93m7","id":4,"cantidad":0,"pais":"BZ"},
    {"descripcionProducto":"Negroni 750ml","precioVentaUnitario":5000,"stockProducto":190,img:"https://ibb.co/wKp93m7","id":5,"cantidad":0,"pais":"US"},
    {"descripcionProducto":"Heraclito clasico 700ml","precioVentaUnitario": 4500,"stockProducto":180,img:"https://ibb.co/wKp93m7","id":6,"cantidad":0,"pais":"BR"},
    {"descripcionProducto":"Whisky Jack Daniels 750ml","precioVentaUnitario":12000,"stockProducto":178,img:"https://ibb.co/wKp93m7","id":7,"cantidad":0,"pais":"FI"},
    {"descripcionProducto":"Ron Avana Club clasico 700ml","precioVentaUnitario":6300,"stockProducto":165,img:"https://ibb.co/wKp93m7","id":8,"cantidad":0,"pais":"AR"}]


const ItemListContainer=()=>{
    return(
        <div className="ItemListContainer">{
            listaProductos.map((producto,i) => (
                <div key={i}>
                     <p>{producto.descripcionProducto}</p>
                     <img src={producto.img} alt="producto"/>
                </div>
            ))}
        </div>
    )
}

export default ItemListContainer;