import React, { useState } from "react";

const Counter = () =>{

    const [count, setCount ] = useState(15);
 return(

    <div>
        <p>Counter value-{count} </p>
        <h5>Number is {count%2 === 0 ? "Even" : "odd"}</h5>
       
        <button onClick={() => setCount(count+1) }>Increament</button>
        <button onClick={() => setCount(count-1) }>Increament</button>
    </div>
 )

};

export default Counter;