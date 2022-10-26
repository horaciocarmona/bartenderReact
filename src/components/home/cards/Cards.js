import "./cards.scss"
import {Link} from "react-router-dom" 
import ItemCount from "../cards/ItemCount/ItemCount"
import * as React from 'react';

const Cards= (props)=>{   
 
  return(
      <div className="cards-container">
          < Link to = {`/id/${props.id}`}>
          <img src={props.imagen} width="100" height="200" alt="imagen Card"/>
          <h5> {props.nombre} </h5>
          <p> Id: {props.id}</p>
          <p> Categoria: {props.categoria}</p>
          <p> Precio: {props.precio}</p>
          </Link>
          <ItemCount 
               numberCount={props.numberCount}
           />

      </div>
  );
}

export default Cards;