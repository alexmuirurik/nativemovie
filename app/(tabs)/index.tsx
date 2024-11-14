import React from 'react';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import Navbar from '@/components/layouts/navbar';
import Categoriescard from '@/components/cards/categoriescard';
import MovieCarouselcard from '@/components/cards/moviecarouselcard';

export default function HomeScreen() {
	return (
		<ParallaxScrollView >
			<Navbar />
			<Categoriescard />
			<MovieCarouselcard />
		</ParallaxScrollView>
	);
}
