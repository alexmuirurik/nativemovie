import type { PropsWithChildren } from 'react';
import { StatusBar, StyleSheet, View  } from 'react-native';
import Animated, { useAnimatedRef } from 'react-native-reanimated';
import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';

export default function ParallaxScrollView({ children}: PropsWithChildren) {
	const scrollRef = useAnimatedRef<Animated.ScrollView>();
	const bottom = useBottomTabOverflow();
	
	return (
		<View className='flex-1 space-y-4'>
			<Animated.ScrollView
				ref={scrollRef}
				scrollEventThrottle={16}
				scrollIndicatorInsets={{ bottom }}
				contentContainerStyle={{ paddingBottom: bottom }}>
				<Animated.View style={styles.header} ></Animated.View>
				<ThemedView className='flex-1 rounded-lg p-4 gap-4 overflow-hidden'>
					{children}
				</ThemedView>
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
