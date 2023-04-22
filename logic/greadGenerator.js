import React from "react";
import {Line} from "react-native-svg";

export default function greadGenerator (width,height,scaleParameter){
    let lines = [];
    for(let i = 0; i < Math.max(width, height); i += scaleParameter) {
        lines.push(<Line key={`line-${i}`} x1={i} y1="0" x2={i} y2={height} stroke="rgb(17,255,0)" height="1" strokeWidth="2" />);
        lines.push(<Line key={`line-${i}-2`} x1="0" y1={i} x2={width} y2={i} stroke="rgb(17,255,0)" height="1" strokeWidth="2" />);
    }
    console.log(scaleParameter,"jjjj")
    return lines;
};


