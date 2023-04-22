import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function Menu() {
    const [selectedOption1, setSelectedOption1] = useState('Option 1');
    const [selectedOption2, setSelectedOption2] = useState('Option 1-1');
    const [selectedOption3, setSelectedOption3] = useState('Option 1-1-1');

    const onOption1Change = (option) => {
        setSelectedOption1(option);
        setSelectedOption2('Option 1-1');
        setSelectedOption3('Option 1-1-1');
    }

    const onOption2Change = (option) => {
        setSelectedOption2(option);
        setSelectedOption3('Option 1-1-1');
    }

    const onOption3Change = (option) => {
        setSelectedOption3(option);
    }

    return (
        <View>
            <Text>Select an option:</Text>
            <Picker
                selectedValue={selectedOption1}
                onValueChange={onOption1Change}
            >
                <Picker.Item label="Option 1" value="Option 1" />
                <Picker.Item label="Option 2" value="Option 2" />
                <Picker.Item label="Option 3" value="Option 3" />
            </Picker>
            {selectedOption1 === 'Option 1' && (
                <Picker
                    selectedValue={selectedOption2}
                    onValueChange={onOption2Change}
                >
                    <Picker.Item label="Option 1-1" value="Option 1-1" />
                    <Picker.Item label="Option 1-2" value="Option 1-2" />
                    <Picker.Item label="Option 1-3" value="Option 1-3" />
                </Picker>
            )}
            {selectedOption2 === 'Option 1-1' && (
                <Picker
                    selectedValue={selectedOption3}
                    onValueChange={onOption3Change}
                >
                    <Picker.Item label="Option 1-1-1" value="Option 1-1-1" />
                    <Picker.Item label="Option 1-1-2" value="Option 1-1-2" />
                    <Picker.Item label="Option 1-1-3" value="Option 1-1-3" />
                </Picker>
            )}
        </View>
    );
}
