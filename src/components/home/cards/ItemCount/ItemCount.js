import * as React from 'react';
import "./ItemCount.scss";

export default function ItemCount(props) {
     const [numberCount,setNumberCount]=React.useState(props.numberCount);
     React.useEffect(
         ()=>{
            return (numberCount< 0 ) ? setNumberCount(0) : setNumberCount(numberCount);     
         },[numberCount]
    )
    return (
        <div>
            <p>
                unidades:
            </p>
            <button onClick={()=>{setNumberCount(numberCount+1)}} class="btn btn-info btn-sm">
               +
            </button>
                {numberCount} 
            <button onClick={()=>{setNumberCount(numberCount-1)}} class="btn btn-danger btn-sm">
                -
            </button>
            
        </div>

    )

}

