import * as React from 'react';
import Button from 'react-bootstrap/Button';
import "./ItemCount.scss";

export default function ItemCount() {
     const [numberCount,setNumberCount]=React.useState(0);
     const sumaCantidad=()=>{
            setNumberCount(numberCount+1);
     };   
     const restaCantidad=()=>{
        numberCount>0 ? setNumberCount(numberCount-1):setNumberCount(0);
     }
    return (
        <div>
            <p>
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

