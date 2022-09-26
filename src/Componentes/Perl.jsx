import React,{useState} from "react";
import { Info } from "./Info";

const Perl=()=>{

    const[style, setStyle]=useState("cont");
    const changeStyle=()=>{
        setStyle("cont2");
    }
    const changeStyle1=()=>{
        setStyle("cont");
    }

    const[stilo, setStilo]=useState("carta");
    const camCard=()=>{
        setStilo("carta2");
    }
    const camCard1=()=>{
        setStilo("carta");
    }

    function uno(){
        camCard();
        changeStyle();
    }

    function dos(){
        camCard1();
        changeStyle1();
    }

    return(
        <div className="container">
            <div className="card">
                {
                    Info.map((informacion)=>(
                        <div>
                            <div className={style} onClick={uno}>
                                <img src={informacion.img3}/>
                                <h3 className="texto">{informacion.perl}</h3>
                            </div>
                            <div className={stilo} onClick={dos}>
                                <p className="carta2">{informacion.info3}</p>    
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Perl;