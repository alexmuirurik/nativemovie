import { Fetchmoviedir } from '@/controllers/getMovies';
import { FontAwesome6 } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import SliderItemCard from './slideritemcard';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useFetching } from '@/hooks/useFetching';

const MovieCarouselcard = () => {
    let index = 0
    const sharedx = useSharedValue(0)
    const [movies, setMovies] = useState<any[]>([])
    const {setFetching} = useFetching()
    const url = 'https://api.themoviedb.org/3/trending/all/day?language=en-US';
    const onScrollHandler = useAnimatedScrollHandler({ onScroll: (e) => sharedx.value = e.contentOffset.x })
    useEffect(() => { 
        setFetching(true)
        Fetchmoviedir(url).then(res => { 
            setMovies(res.results)
            setFetching(false)
        }) 

    }, [])
    return (
        <View>
            {(movies.length !== 0) &&
                <Animated.FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={movies}
                    renderItem={(movie) => {
                        index++
                        return <SliderItemCard index={index} movie={movie} sharedx={sharedx} height={500} width={300} />
                    }}
                    onScroll={onScrollHandler}
                />
            }
        </View>
    );
}

export default MovieCarouselcard;
