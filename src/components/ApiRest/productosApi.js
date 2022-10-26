     const productos=[{descripcionProducto:"Ron Avana Club clasico 700ml",precioVentaUnitario:6300,stockProducto:165,img:"https://i.ibb.co/Bg4h1Lh/bombaybramle.png",id:1,cantidad:0,pais:"FI",category:"grande"},
     {descripcionProducto:"Campari 750ml",precioVentaUnitario:1800,stockProducto:3,img:"https://i.ibb.co/nLWSGVq/campari.png",id:2,cantidad:0,pais:"MX",category:"grande"},
     {descripcionProducto:"Gin Bombay Bramble 700",precioVentaUnitario:3800,stockProducto:150,img:"https://i.ibb.co/Bg4h1Lh/bombaybramle.png",id:3,cantidad:0,pais:"AR",category:"mediano"},
     {descripcionProducto:"Capel reservado clasico 700ml",precioVentaUnitario:4200,stockProducto:300,img:"https://i.ibb.co/Sn3116s/capelreservadotransparente-Copy.png" ,id:4,cantidad:0,pais:"BZ",category:"mediano"},
     {descripcionProducto:"Negroni 750ml",precioVentaUnitario:5000,stockProducto:190,img:"https://i.ibb.co/BCDVhRZ/negroni14.png",id:5,cantidad:6,pais:"US",category:"grande"},
     {descripcionProducto:"Heraclito clasico 700ml",precioVentaUnitario: 4500,stockProducto:180,img:"https://i.ibb.co/gmPYvrJ/heraclitolondondry.png",id:6,cantidad:0,pais:"BR",category:"mediano"},
     {descripcionProducto:"Whisky Jack Daniels 750ml",precioVentaUnitario:12000,stockProducto:178,img:"https://i.ibb.co/Hhd6kgv/whiskyjackdaniels.jpg",id:7,cantidad:0,pais:"FI",category:"grande"},
     {descripcionProducto:"Puerto de Indias clasico 700ml",precioVentaUnitario:6300,stockProducto:165,img:"https://i.ibb.co/pRVjpBw/puertodeindiasclasic.png",id:8,cantidad:0,pais:"AR",category:"grande"}];
     
 
     const getProductos=()=>{
         return new Promise((resolve,reject)=>{
             if(productos.length===0){
                 return reject(new Error("datos vacios"));
             }
             setTimeout(() => {

                return resolve(productos); 

                }, 2000);
       
         })
     };
    
    const productosApi= async()=> {
        const productoPromise = await getProductos();
      
        const productos = productoPromise.map((productos) => ({
                id:productos.id,
                category:productos.category,
                nombre:productos.descripcionProducto,
                imagen:productos.img,
                precio:productos.precioVentaUnitario,
                stockProducto:productos.stockProducto

            }));
            console.log(productos);
        
            return productos;
        }
        // productosApi()
        export const getProductoById=(id)=>{
            console.log(id);
            const unProducto=productos.find(element=>element.id===parseInt(id));   
            return unProducto
        }

        export default productosApi;

        