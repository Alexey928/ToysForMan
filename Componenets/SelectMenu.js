import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CustomPickerIcon = () => (
    <View>
        {/* здесь можно использовать свою иконку */}
        <Text>ICON</Text>
    </View>
);

export default function Menu() {
    const [selectedOption, setSelectedOption] = useState('Option 1');

    const onOptionChange = (option) => {
        setSelectedOption(option);
    }

    return (
        <View>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedOption}
                    onValueChange={onOptionChange}
                    icon={<CustomPickerIcon/>}
                >
                    <Picker.Item style={selectedOption === "Option 1"?
                        styles.activePikerItem:styles.pikerItem} label="top-left" value="Option 1"
                    />
                    <Picker.Item style={selectedOption === "Option 2"?
                        styles.activePikerItem:styles.pikerItem} label="top-right" value="Option 2"
                    />
                    <Picker.Item style={selectedOption === "Option 3"?
                        styles.activePikerItem:styles.pikerItem} label="bottom-left" value="Option 3"
                    />
                    <Picker.Item style={selectedOption === "Option 4"?
                    styles.activePikerItem:styles.pikerItem} label="bottom-right" value="Option 4"
                    />
                </Picker>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pickerContainer: {
        backgroundColor: '#5e00f1',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#f30303',
        width:50
    },

    pikerItem:{
        backgroundColor:'#52219d',
        color: 'rgba(64,255,0,0.98)',


    },
    activePikerItem:{
        backgroundColor:'#9d5921'
    }
});