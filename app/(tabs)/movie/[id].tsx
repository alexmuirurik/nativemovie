import React, { useEffect, useState } from 'react';
import Navbar from '@/components/layouts/navbar';
import ParallaxScrollView from '@/components/layouts/ParallaxScrollView';
import { useLocalSearchParams } from 'expo-router';
import { Fetchmoviedir } from '@/controllers/getMovies';
import Moviedetails from '@/components/cards/moviedetails';
import { useFetching } from '@/hooks/useFetching';
import { Text } from 'react-native';

const MovieSlug = () => {
    const [movie, setMovie] = useState<any>({})
    const {setFetching} = useFetching()
    const { id } = useLocalSearchParams()
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`
    useEffect(() => { 
        setFetching(true)
        Fetchmoviedir(url).then(res => { 
            setMovie(res)
            setFetching(false)
        }) 

    }, [])
    return (
        <ParallaxScrollView>
           <Navbar link={'/(tabs)'} />
           <Text>{id}</Text>
           <Moviedetails movie={movie} />
        </ParallaxScrollView>
    );
}

export default MovieSlug;
