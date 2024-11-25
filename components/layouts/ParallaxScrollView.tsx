import type { PropsWithChildren } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { ThemedView } from '@/components/ui/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import { FetchContextProvider } from '@/hooks/useFetching';

const ParallaxScrollView = ({ children }: PropsWithChildren) => {
	const scrollRef = useAnimatedRef<Animated.ScrollView>();
	const bottom = useBottomTabOverflow();
	return (
		<View className='flex-1 space-y-4'>
			<Animated.ScrollView
				ref={scrollRef}
				scrollEventThrottle={16}
				scrollIndicatorInsets={{ bottom }}
				contentContainerStyle={{ paddingBottom: bottom }}>
				<Animated.View style={styles.header} >
					<StatusBar barStyle={'dark-content'} backgroundColor={'white'} />
				</Animated.View>
				<FetchContextProvider>
					<ThemedView className='flex-1 rounded-lg p-4 gap-4 overflow-hidden'>
						{children}
					</ThemedView>
				</FetchContextProvider>
			</Animated.ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		height: StatusBar.currentHeight,
		overflow: 'hidden',
	},
});


export default ParallaxScrollView
