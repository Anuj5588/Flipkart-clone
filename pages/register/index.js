
import { useState } from "react";
import Login from "../login";


export default function Register() {
    const [register, setregister]= useState(true)

    console.log("-----",register)
   
  return (
    <>
   <Login register={register} setregister={setregister} />

     
    </>
  );
}
