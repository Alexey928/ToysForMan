import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default  function BlinkingButton (){
    const [backgroundColor, setBackgroundColor] = useState('#f00');

    useEffect(() => {
        const interval = setInterval(() => {
            setBackgroundColor(prevColor => prevColor === '#f00' ? '#0f0' : '#f00');
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <TouchableOpacity style={[styles.button, { backgroundColor }]}>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 30,
        height: 30,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        width: 30,
        height: 30,
        backgroundColor: '#fff',
        borderRadius: 15,
        marginBottom: 5,
    },
    text: {
        color: '#fff',
    },
});