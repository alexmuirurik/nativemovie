import React, { useState } from 'react';
import { AntDesign, FontAwesome6 } from '@expo/vector-icons';
import { Text, View } from 'react-native';

const Navbar = () => {
    const [iconName, setIconName] = useState<'bars' | 'bars-staggered'>('bars')
    const sidebarshow = () => {
        (iconName === 'bars') ? setIconName('bars-staggered') : setIconName('bars') 
    }
    return (
        <View className='flex flex-row items-center justify-between gap-4 w-full'>
            <FontAwesome6 name={iconName} size={25} color='teal' selectable selectionColor={'blue'} onPress={sidebarshow} />
            <Text className='text-teal-800 font-bold'>Our Cool App</Text>
            <AntDesign name='bells' size={25} color='teal' />
        </View>
    );
}

export default Navbar;

