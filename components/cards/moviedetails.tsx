import { Fetchmoviedir } from '@/controllers/getMovies';
import { useFetching } from '@/hooks/useFetching';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import Video from 'react-native-video';

const Moviedetails = ({ movie }: { movie: any}) => {
    const [playing, setPlaying] = useState(false)
    const [videos, setVideos] = useState<any[]>([])
    const {setFetching} = useFetching()
    console.log(movie)
    const imageurl = 'https://image.tmdb.org/t/p/original'
    const url = `https://api.themoviedb.org/3/movie/${movie?.id}/videos?language=en-US`
    useEffect(() => { 
        setFetching(true)
        Fetchmoviedir(url).then(res => { 
            setVideos(res.results)
            setFetching(false)
        }) 

    }, [])
    return (
        <View className='bg-black border rounded-md w-screen aspect-video p-2'>
            {
                (playing && videos.length > 0 )?   <Image source={{ uri: imageurl + (movie?.poster_path ?? movie?.backdrop_path) }} />
                :   <Video source={{uri: `https://www.youtube.com/watch?v=${videos?.[0].key}`}} />
            }
        </View>
    );
}

export default Moviedetails;
