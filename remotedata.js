import { useEffect, useState } from "react"
import React from 'react'

export default function Content() {
const [data, setData]=useState([])

const fetchRemoteData =() => {
  fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then((data) => setData(data));
}
useEffect(()=>{
fetchRemoteData()
},[])

  return (
   <>
    {/* {data.map((row,index) => (
      <>
      <p>
        {index + 1} {row.id}
      </p>
      </>
    ))} */}
<table class="table">
  <thead>
    <tr>
      <th scope="col">S.No</th>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Status</th>
    </tr>
    
  </thead>


  <tbody>
  {data.map((row,index) => (
    <>
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{row.id}</td>
      <td>{row.title}</td>
      <td>{row.completed === true ? "true" : "false"}</td>
    </tr>
    </>
    ))} 
  </tbody>


</table>



</>
  );

}
