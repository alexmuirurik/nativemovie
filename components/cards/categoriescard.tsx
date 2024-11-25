import { FontAwesome6 } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Animated, Image, RefreshControl, ScrollView, Text, View } from 'react-native';
import { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import SliderItemCard from './slideritemcard';
import { Fetchmoviedir } from '@/controllers/getMovies';
import { useFetching } from '@/hooks/useFetching';

const Categoriescard = ({ category }: { category: { active: string, link: string, title: string } }) => {
    let index = 0
    const sharedx = useSharedValue(0)
    const [movies, setMovies] = useState<any[]>([])
    const {setFetching} = useFetching()
    const url = category.link;
    const onScrollHandler = useAnimatedScrollHandler({ onScroll: (e) => sharedx.value = e.contentOffset.x })
    useEffect(() => { 
        setFetching(true)
        Fetchmoviedir(url).then(res => { 
            setMovies(res.results)
            setFetching(false)
        }) 

    }, [])
    return (
        <View className='flex w-screen ps-2 pe-8'>
            <View className='flex flex-row justify-between items-center w-full pb-4 '>
                <View>
                    <Text className='text-xl text-teal-600 font-bold'>
                        {category.title}
                    </Text>
                </View>
                <View>
                    <Text className='text-sm text-teal-800'>
                        See All
                    </Text>
                </View>
            </View>
            {(movies.length !== 0) &&
                < Animated.FlatList
                    refreshControl={<RefreshControl refreshing={(movies.length === 0)} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={movies}
                    renderItem={(movie) => {
                        index++
                        return <SliderItemCard key={movie.item?.id} index={index} movie={movie} sharedx={sharedx} height={300} width={200} />
                    }}
                />
            }
        </View>

    );
}

export default Categoriescard;
