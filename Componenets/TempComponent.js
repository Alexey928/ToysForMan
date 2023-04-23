import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, PanResponder, Animated } from 'react-native';

const App = () => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0.5, y: 0.5 }); // начальная позиция центра масштабирования

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (event, gesture) => {
            const { width, height } = event.nativeEvent.layout;
            const { x0, y0 } = gesture;

            // вычисляем новую позицию центра масштабирования в координатах от 0 до 1
            const newX = x0 / width;
            const newY = y0 / height;

            // ограничиваем координаты центра масштабирования от 0 до 1
            const clampedX = Math.max(Math.min(newX, 1), 0);
            const clampedY = Math.max(Math.min(newY, 1), 0);

            // обновляем состояние позиции центра масштабирования
            setPosition({ x: clampedX, y: clampedY });
        },
        onPanResponderRelease: () => {},
    });

    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/icon.png')}
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.overlay} {...panResponder.panHandlers}>
                    {/* используем Animated.View для масштабирования фона */}
                    <Animated.View
                        style={{
                            flex: 1,
                            transform: [
                                {
                                    scale: new Animated.Value(scale),
                                },
                            ],
                            // задаем точку центра масштабирования
                            transformOrigin: [position.x * 100 + '%', position.y * 100 + '%'],
                        }}
                    >
                        {/* контент компонента */}
                    </Animated.View>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
});

export default App;