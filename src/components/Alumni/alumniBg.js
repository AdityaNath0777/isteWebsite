import React, { useEffect } from "react";
import { appendScript } from "../../AppendScript";
import { AluminiProto } from "../Alumni";
// import "./alumni.css";
const AlumniBg = ()=> {
    useEffect(() => {
        appendScript("./gradientBackground.js");
        appendScript("./navLinksAnimate.js");
      }, []);
    return(
        <AluminiProto />
        
    )
}

export default AlumniBg;