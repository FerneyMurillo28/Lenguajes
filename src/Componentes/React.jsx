import React from "react";
import { Info } from "./Info";

const Reacte=()=>{
    return(
        <div className="container">
            <div className="card">
                {
                    Info.map((informacion)=>(
                        <div>
                            <img src={informacion.img4}/>
                            <h3 className="texto">{informacion.react}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Reacte;