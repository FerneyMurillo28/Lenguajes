import React from "react";
import java from './Imagenes/Java.png'
import {Info} from './Info'

const Java=()=>{

    

    return(
        <div className="container">
            <div className="card">
                <img src={java} alt=""/>
                <h1>Prueba</h1>
                <div>
                    {
                        Info.map((informacion)=>(
                            <h3>{informacion.java}</h3>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Java