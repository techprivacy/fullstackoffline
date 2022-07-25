import { useState } from "react";

function Slider() {
const[number,setnumber] =useState(0)
const incre=()=>{
setnumber(number+1)
}
const decre=()=>{
  setnumber(number-1)
  }

    return (

      <>
  <h1>value is {number}</h1>
<button onClick={incre}>Increase</button>
<button onClick={decre}>Increase</button>
</>

    );
  }


export default Slider;

