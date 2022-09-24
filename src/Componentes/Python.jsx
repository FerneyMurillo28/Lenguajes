import React from "react";
import python from './Imagenes/Python.png'
import { Info } from "./Info";

const Python=()=>{
    return(
        <div className="container">
            <div className="card">
                {
                    Info.map((informacion)=>(
                        <div>
                            <img src={informacion.img1}/>
                            <h3>{informacion.python}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Python;