import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import SelectedMenu from "./SelectMenu"

export default function menuBurger() {
    const [isOpen, setIsOpen] = useState(false);

    const slideAnim = useRef(new Animated.Value(0)).current;
    const colorAnim = useRef(new Animated.Value(0)).current;
    const toggleMenu = () => {
        setIsOpen(prev=>!prev);
        Animated.timing(slideAnim, {
            toValue: isOpen ? 0 : 1,
            duration: 600,
            useNativeDriver: false,
        }).start();
        Animated.timing(colorAnim, {
            toValue: isOpen ? 0 : 1,
            duration: 600,
            useNativeDriver: false,
        }).start();
    };

    const menuStyle = {
        transform: [
            {
                translateX: slideAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-300, 0],
                }),
            },
        ],
        backgroundColor: colorAnim.interpolate({
            inputRange: [0, 1],
            outputRange: ['rgba(25,243,136,0.36)', 'rgb(164,245,3)'],
        }),

    };

    return (
        <>
            <View style={styles.menuButtonContayner}>
                    <TouchableOpacity onPress={toggleMenu}>
                        <View style={styles.menuButton}>
                            <Text>M</Text>
                        </View>
                    </TouchableOpacity>
            </View>

            <Animated.View style={[styles.menu, menuStyle]}>
                <TouchableOpacity onPress={toggleMenu}>
                    <View style={styles.closeButton}>
                        <Text >X</Text>
                    </View>

                </TouchableOpacity>
                <SelectedMenu/>
                <Text style={styles.menuItem}>+ position</Text>
                <Text style={styles.menuItem}>conect chek</Text>
            </Animated.View>
        </>
    );
}

const styles = StyleSheet.create({

    menuButtonContayner:{
        top:0,
        left:0,
        position:"absolute",
    },
    menuButton: {
        lineHeight:20,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        backgroundColor:'rgba(125,0,206,0.91)',
        borderRadius:100,
        borderWidth:5,
        borderColor:'rgb(6,250,164)',
    },
    menu: {
        position: 'absolute',
        display:"flex",
        alignItems:"center",
        justifyContent: "space-evenly",
        top: 0,
        left: 0,
        bottom: 0,
        width: 150,
        paddingTop:50,
        borderRadius:25,
        borderWidth:5,
        borderColor:'rgb(255,205,4)'

    },
    closeButton: {
        width:100,
        display:'flex',
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"center",
        borderWidth:1,
        borderColor:'rgb(232,8,248)',
        backgroundColor:'rgb(6,250,164)',
        borderRadius:25,
    },
    menuItem: {
        backgroundColor:'rgb(6,250,164)',
        fontSize: 20,
        padding:5,
        borderRadius:5,
    },
});