import { Fetchmoviedir } from '@/controllers/getMovies';
import { FontAwesome6 } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import SliderItemCard from './slideritemcard';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';

const MovieCarouselcard = () => {
    let index = 0
    const sharedx = useSharedValue(0)
    const [movies, setMovies] = useState<any[]>([])
    const url = 'https://api.themoviedb.org/3/discover/movie';
    const onScrollHandler = useAnimatedScrollHandler({ onScroll: (e) => sharedx.value = e.contentOffset.x })
    useEffect(() => { Fetchmoviedir(url).then(res => setMovies(res)) }, [])
    return (
        <View>
            {movies.length === 0
                ? <FontAwesome6 name='cog' className='animate-spin' />
                : <Animated.FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={movies}
                    renderItem={(movie) => { 
                        index ++
                        return <SliderItemCard index={index} movie={movie} sharedx={sharedx} />
                    }}
                    onScroll={onScrollHandler}
                />
            }
        </View>

    );
}

export default MovieCarouselcard;
