import React from 'react';
import ParallaxScrollView from '@/components/layouts/ParallaxScrollView';
import Navbar from '@/components/layouts/navbar';
import Categoriescard from '@/components/cards/categoriescard';
import MovieCarouselcard from '@/components/cards/moviecarouselcard';
import { categories } from '@/constants/categories';

const IndexScreen = () => {
	return (
		<ParallaxScrollView >
			<Navbar />
			<MovieCarouselcard />
			{categories.map(category => {
				return <Categoriescard key={category.link} category={category} />
			})}
		</ParallaxScrollView>
	);
}

export default IndexScreen