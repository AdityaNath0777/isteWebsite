import React, { useEffect } from "react";
import { appendScript } from "../../AppendScript";
// import { alumini01, alumini02, alumini03 } from "./images";

import { AluminiProto } from "../Alumni";
// import "./alumni.css";
const AlumniBg = ()=> {
    useEffect(() => {
        appendScript("./gradientBackground.js");
        appendScript("./navLinksAnimate.js");
        console.log('append gradient script command invoked');
      }, []);
    return(
        <div className="alumni-bg gradBg">
            <AluminiProto />
        </div>
        
    )
}

export default AlumniBg;