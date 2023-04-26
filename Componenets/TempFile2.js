import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';

export default function App() {
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
            outputRange: ['rgba(25,243,136,0.36)', 'rgb(137,2,169)'],
        }),

    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleMenu}>
                <Text style={styles.menuButton}>M</Text>
            </TouchableOpacity>

            <Animated.View style={[styles.menu, menuStyle]}>
                <TouchableOpacity onPress={toggleMenu}>
                    <Text style={styles.closeButton}>Закрыть</Text>
                </TouchableOpacity>
                <Text style={styles.menuItem}>Главная</Text>
                <Text style={styles.menuItem}>О нас</Text>
                <Text style={styles.menuItem}>Контакты</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuButton: {
        lineHeight:20,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
        backgroundColor:'rgba(125,0,206,0.91)',
        borderRadius:100,
        borderWidth:1,
        borderColor:'rgb(91,253,0)',

    },
    menu: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButton: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,

        top: 0,
        right: 0,
    },
    menuItem: {
        fontSize: 20,
        padding: 20,
    },
});