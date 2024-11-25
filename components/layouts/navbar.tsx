import React, { useState } from 'react';
import { AntDesign, FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { Href, Link } from 'expo-router';
import { useFetching } from '@/hooks/useFetching';

const Navbar = ({ link }: { link?: Href }) => {
    const [iconName, setIconName] = useState<'bars' | 'bars-staggered'>('bars')
    const { fetching, setFetching } = useFetching()
    const sidebarshow = () => (iconName === 'bars') ? setIconName('bars-staggered') : setIconName('bars')
    return (
        <View className='flex flex-row items-center justify-between gap-4 w-full'>
            {link ?
                <Link href={link} className='' >
                    <FontAwesome6 name={'circle-chevron-left'} size={25} color='teal' className='w-full' selectionColor={'blue'} />
                </Link>
                : <Link href={{pathname:'..'}} onPress={sidebarshow}> 
                    <FontAwesome6 name={iconName} size={25} color='teal' className='w-full' onPress={sidebarshow} /> 
                </Link>
            }
            <Text className='text-teal-800 font-bold'>Our Cool App</Text>
            {fetching ? <FontAwesome name='cog' size={25} color={'teal'} className='animate-spin' />
                : <AntDesign name='bells' size={25} color='teal' />
            }
        </View>
    );
}

export default Navbar;

