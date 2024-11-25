import Navbar from '@/components/layouts/navbar';
import ParallaxScrollView from '@/components/layouts/ParallaxScrollView';
import { StyleSheet } from 'react-native';

const NotFoundScreen = () => {
	return (
		<ParallaxScrollView>
			<Navbar link={'/(tabs)'} />
		</ParallaxScrollView>
  	);
}

export default NotFoundScreen