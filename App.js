
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Switch,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableOpacity, Button
} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as ScreenOrientation from 'expo-screen-orientation';
import {Circle, Svg} from 'react-native-svg';
import { RadioButton } from 'react-native-paper';
//----------------------------------------------------------------------------------------------------------------------
import Modal from "./Componenets/modall";
import Point from "./Componenets/point";
import TempComponent2 from "./Componenets/Menu"

//----------------------------------------------------------------------------------------------------------------------
import scaleFilter from "./logic/filterForHeight";
import gread from "./logic/greadGenerator";
//======================================================================================================================

ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE).then();//

let screanHith = 390;
let screanWidth  = 892;
let parametrOfPointsNumber = 2;



export default function App() {

  const [tr,setTr] = useState(true)
  const [showModall,setShowModall] = useState(false)
  const [coordinates, setCoordinates] = useState({x: -10, y: -20});
  const [points,setPoints] = useState([]);
  const [value, setValue] = useState('first');

  const [scale, setScale] = useState(1);
  const [vector,setVector] = useState({x:0,y:0})

  function pointsHasFlexPoint(){
    return  points.reduce((val, item) => item.status === "flex" ? val + 10 : val - 1, 0) > 0;
  }

  const addNewPoints = ()=>{
    if(points.length<parametrOfPointsNumber){
      if(points.length===parametrOfPointsNumber-1){
        setPoints([{x:coordinates.x,y:coordinates.y,parametr:"blue",status:"fixed",id:points.length},...points])
        setShowModall(false);
        return;
      }
      setPoints([{x:coordinates.x,y:coordinates.y,parametr:"red",status:"fixed",id:points.length},...points])
    }
    if(pointsHasFlexPoint()){
      setPoints(points.map((p)=>p.status==="flex"?{...p,x:coordinates.x,y:coordinates.y,status:"fixed"}:{...p}))
    }

    setShowModall(false);
  };

  const changePointStatus =(id)=>{
    setPoints(points.map(el => el.id===id ? {...el,status:"flex"} : {...el}));
  }

  const handlePress = event => {
    console.log("press hendle")
    if (event.target.type !== 'checkbox'&& points.length<parametrOfPointsNumber) {
      const { locationX, locationY } = event.nativeEvent;
      setCoordinates({ x: locationX, y: locationY });
      setShowModall(true);
      console.log(locationX, locationY)
    }
    if(event.target.type !== 'checkbox' && pointsHasFlexPoint()){
      const { locationX, locationY } = event.nativeEvent;
      setCoordinates({ x: locationX, y: locationY });
      setShowModall(true);
      console.dir(event)

    }
  };

  // useEffect(()=>{
  //   console.log("efect",showModall)
  // },[coordinates])

  return (

        <View style={styles.container}>
          <ImageBackground style={[styles.background, {transform:[{ translateX: vector.x },{translateY:vector.y },{scale}]}]} source={{ uri:"https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/drone-photography/desktop/drone-photography_P3_720x350.jpg.img.jpg" }}>
          </ImageBackground>

          <View style={{backgroundColor:'rgba(8,236,38,0)',position:"absolute", top:0,left:1,display:"flex"}}>

            {showModall && <Modal addNewPoints={addNewPoints} left = {coordinates.x + 10} top={coordinates.y + 10}/>}

            <TouchableWithoutFeedback onPress={handlePress}>
              <Svg  height={365} width={811} style={{backgroundColor:'rgba(222,126,58,0)'}}>
                {gread(screanWidth,screanHith,scaleFilter(value))}
                <Circle cx={coordinates.x} cy={coordinates.y} r={10} fill={"red"}/>
                {points.map((el,i)=>(
                    <Point  key={i} id={el.id} x={el.x} y={el.y} parametr={el.parametr}
                            status={el.status} changePointStatus={changePointStatus} />))}
              </Svg>
            </TouchableWithoutFeedback>

              <View style={{position:"absolute", top:60,left:1,}}>
                  <RadioButton.Group  onValueChange={newValue => {setValue(newValue);setVector({x:389,y:190});setScale(2.05)}} value={value}>
                    <View  style={{backgroundColor: 'rgba(38,50,243,0.49)',width:50,display:"flex",flexDirection:"column",justifyContent:"center"}}>
                      <View  >
                        <RadioButton color={"blue"} value="first" />
                        <Text style = {styles.radioHeight}>50 М</Text>
                      </View>

                      <View>
                        <RadioButton  color={"blue"} value="second" />
                        <Text color={"blue"} style = {styles.radioHeight}>100 М</Text>
                      </View>
                      <View>
                        <RadioButton color={"blue"} value="third" />
                        <Text style = {styles.radioHeight}>150М</Text>
                      </View>
                      <Button title={"OK"} onPress={() => console.log("Координаты отправлены!!")} />

                    </View>
                </RadioButton.Group>

            </View>
            <TempComponent2/>
          </View>
        </View>


  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    alignItems: 'center',
    flexDirection:"column"
  },
  radioHeight:{
    color:"rgb(0,255,246)",
    fontWeight:'bold'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
