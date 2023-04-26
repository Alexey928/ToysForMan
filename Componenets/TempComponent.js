import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native';

const App = () => {
    const [scale, setScale] = useState(2);
    const [vector,setVector] = useState({x:0,y:0})

    const handlePress = () => {
        setScale(scale)
        setVector({...vector,x:vector.x=380,y:vector.y=190});
    };
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.touchArea} onPress={handlePress}>
                <ImageBackground
                    source={require('../assets/icon.png')}
                    style={[styles.backgroundImage, {transform:[{ translateX: vector.x },{translateY:vector.y },{ scale }]}]}
                    resizeMode="cover"
                >
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    touchArea: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

export default App;
