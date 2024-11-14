import React, { useState } from 'react';
import { categories } from '@/constants/categories';
import { ScrollView, Text, TouchableHighlight, View } from 'react-native';

const Categoriescard = () => {
    const [active, setActive] = useState(categories)
    const setActiveItem = (categoryTitle: string) => {

    }
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='gap-3'>
            {categories.map((category, index) => {
                const activeitem = active.find(item => category.title === item.title)
                return <TouchableHighlight className='focus:bg-transparent' key={index} onPress={() => setActiveItem(category.title)} >
                    <View className={`${activeitem?.active && 'bg-neutral-300'} border border-neutral-400 rounded-md px-4 py-1 me-2`}>
                        <Text className='text-teal-600'>{category.title}</Text>
                    </View>
                </TouchableHighlight>
            })}
        </ScrollView>
    );
}

export default Categoriescard;
