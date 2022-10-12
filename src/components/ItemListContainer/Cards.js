import "./ItemListContainer"
import "./Cards.scss"
const Cards= (props)=>{   
    return(
      <div className="cards-container">
          
          <img src={props.imagen} width="100" height="200" alt="imagen Card"/>
          <h5> {props.nombre} </h5>
          <p> Precio: {props.precio}</p>
      </div>
  );
}

export default Cards;