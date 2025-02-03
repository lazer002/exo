import { Image, Text, View } from 'react-native';

export default function TabOneScreen() {
  return (
    <View className='p-6'>
      <View className='flex flex-row justify-between items-center'> {/* Using NativeWind classes */}
        <Text className='text-2xl'>Welcome Home, Lazer</Text>
        <Image source={{ uri: 'https://picsum.photos/100/100' }} className='w-10 h-10 rounded-full' /> {/* Using NativeWind classes */}
      </View>
    </View>
  );
}
