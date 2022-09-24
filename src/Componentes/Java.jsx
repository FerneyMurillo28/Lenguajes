import React from "react";
import {Info} from './Info'

const Java=()=>{
    return(
        <div className="container">
            <div className="card">
                {
                    Info.map((informacion)=>(
                        <div>
                            <img src={informacion.img1}/>
                            <h3 className="texto">{informacion.java}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Java