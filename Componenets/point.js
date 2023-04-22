import React, {useState} from "react";
import {Circle} from "react-native-svg";
import {TouchableWithoutFeedback} from "react-native";





export default function Point (props){
    return(
        <TouchableWithoutFeedback onPress={()=>{
            console.log(props.id);props.changePointStatus(props.id);}}>
            <Circle cx={props.x} cy={props.y} r={10} fill={props.status === "fixed"?props.parametr:"rgb(0,255,42)"}/>
        </TouchableWithoutFeedback>
    )
}