import "./itemCart.scss"
import * as React from 'react';
import Button from 'react-bootstrap/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const ItemCart= ({id,nombre,precio,cantidad,stockProducto,handleOnRemove})=>{   
    const handleOnRemoveConfirma=()=>{
        handleOnRemove({id,cantidad,precio});
    }  
    return(
      <div className="cards-container-carrito">
          <p> {nombre} </p>
          <p> Stock:  {stockProducto}</p>
          <p> cantidad:  {cantidad}</p>
          <p> Precio: {precio}</p>
          {/* <FontAwesomeIcon icon="fa-duotone fa-trash-can" />
          <FontAwesomeIcon icon="check-square" />
          <FontAwesomeIcon icon={faCoffee} /> */}
          <Button onClick={handleOnRemoveConfirma}>
                
          </Button>
      </div>
    );    
}

export default ItemCart;