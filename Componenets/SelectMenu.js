import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Menu() {
    const [selectedOption, setSelectedOption] = useState('Option 1');

    const onOptionChange = (option) => {
        setSelectedOption(option);
    }

    return (
        <View>
            <Text>Select</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedOption}
                    onValueChange={onOptionChange}
                >
                    <Picker.Item style={selectedOption === "Option 1"?
                        styles.activePikerItem:styles.pikerItem} label="Angle 30deg" value="Option 1"
                    />
                    <Picker.Item style={selectedOption === "Option 2"?
                        styles.activePikerItem:styles.pikerItem} label="Angle 50deg" value="Option 2"
                    />
                    <Picker.Item style={selectedOption === "Option 3"?
                        styles.activePikerItem:styles.pikerItem} label="Angle 60deg" value="Option 3"
                    />
                    <Picker.Item style={selectedOption === "Option 4"?
                    styles.activePikerItem:styles.pikerItem} label="Angle 70deg" value="Option 4"
                    />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {

        backgroundColor: '#52219d',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f30303',
        overflow: 'hidden',
    },
    picker: {
        fontSize: 16,
        height: 50,
        color: 'rgba(255,0,183,0.98)',
        textAlign: 'center',

    },
    pikerItem:{
        backgroundColor:'#52219d',
        color: 'rgba(64,255,0,0.98)',


    },
    activePikerItem:{
        backgroundColor:'#9d5921'
    }
});