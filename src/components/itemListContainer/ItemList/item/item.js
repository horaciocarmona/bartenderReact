import "./item.scss"
import {Link} from "react-router-dom" 
import * as React from 'react';
import {cartContext} from "../../../../context/cartContext"
import {useContext} from "react"
import Button from 'react-bootstrap/Button';

const Item= (props)=>{   

return(
      <div className="cards-container">
          < Link to = {`/id/${props.id}`}>
          <img src={props.imagen} width="100" height="200" alt="imagen Card"/>
          <h5> {props.nombre} </h5>
          <p> Id: {props.id}</p>
          <p> Categoria: {props.categoria}</p>
          <p> Precio: {props.precio}</p>
          <p> Stock:  {props.stockProducto}</p>
          <Button>
                Agregar al Carrito
          </Button>

          </Link>
      </div>
  );
}

export default Item;