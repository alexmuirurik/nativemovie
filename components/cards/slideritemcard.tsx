import React from 'react';
import { Animated, Dimensions, Image, StyleSheet, View } from 'react-native';
import { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';

const imageurl = 'https://image.tmdb.org/t/p/original'
const { width } = Dimensions.get('window')
const SliderItemCard = ({index, movie, sharedx }: { index:number, movie: any, sharedx: SharedValue<number> }) => {
    const anumatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: interpolate(
                        sharedx.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [-width * 0.5, 0, width * 0.5],
                        Extrapolation.CLAMP
                    ),

                },
                {
                    scale: interpolate(
                        sharedx.value,
                        [(index - 1) * width, index * width, (index + 1) * width],
                        [0.9, 1, 0.9],
                        Extrapolation.CLAMP
                    )
                }
            ],
        }
    })
    return (
        <Animated.View key={movie?.index} style={[styles.slidercard, anumatedStyle]} >
            <Image
                style={styles.image}
                source={{ uri: imageurl + (movie?.item?.poster_path ?? movie?.item?.backdrop_path) }}
            />
        </Animated.View>
    );
}

export default SliderItemCard;

const styles = StyleSheet.create({
    slidercard: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        marginEnd: 10
    },
    image: {
        width: 200,
        height: 400,
        borderRadius: 20
    }
})