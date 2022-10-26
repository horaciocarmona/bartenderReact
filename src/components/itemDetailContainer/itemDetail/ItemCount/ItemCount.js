import * as React from 'react';
import Button from 'react-bootstrap/Button';
import "./ItemCount.scss";

export default function ItemCount(props) {
    const [numberCount,setNumberCount]=React.useState(0);
     const sumaCantidad=()=>{
            let limite=props.stockProducto-numberCount;
            limite ? setNumberCount(numberCount+1):setNumberCount(numberCount);
     };   
     const restaCantidad=()=>{
        numberCount>0 ? setNumberCount(numberCount-1):setNumberCount(0);
     }
    return (
        <div>
            <p className='unidades'>
                unidades:
            </p>
            <Button onClick={sumaCantidad} className="btn btn-info btn-sm">
               +
            </Button>
                {numberCount} 
            <Button onClick={restaCantidad} className="btn btn-danger btn-sm">
                -
            </Button>
            
        </div>

    )

}

