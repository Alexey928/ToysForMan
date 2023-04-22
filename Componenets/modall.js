import React from "react";
import {StyleSheet,View,Button} from 'react-native';


export default function Modall(props){
    return(
    <View style = {{...styles.contayner, top:props.top, left:props.left}}>
        <Button title="BADA BUM"  onPress={() =>{props.addNewPoints()}}/>
    </View>
)};



const styles =StyleSheet.create({
        radioHeight:{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        contayner:{
            zIndex:5,
            borderBottomEndRadius:10,
            backgroundColor:"rgba(255,229,42,0.51)",
            position:"absolute",
            flex:1,
            justifyContent: 'center',
            alignItems: 'center',
        },
    }
)