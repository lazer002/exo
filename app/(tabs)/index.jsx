import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default function TabOneScreen() {
  const items = [
    { title: 'Schedule', icon: 'calendar' },
    { title: 'Attendance', icon: 'check' },
    { title: 'Batch', icon: 'users' },
    { title: 'Exams', icon: 'book' },
    { title: 'Reschedule', icon: 'houzz' },
    { title: 'Etc', icon: 'layers' }
  ];
  const topics = [
    { title: 'Mathematics', bgColor: 'bg-purple-100' }, 
    { title: 'Science', bgColor: 'bg-blue-100' },
    { title: 'History', bgColor: 'bg-yellow-100' },
    { title: 'Literature', bgColor: 'bg-red-100' }
  ];
  return (
    <ScrollView  contentContainerStyle={{ flexGrow: 1 }}>
    <View className='p-6'>
      <View className='flex flex-row justify-between items-center'>
        <Text className='text-2xl'>Welcome Home, Lazer</Text>
        <Image source={{ uri: 'https://picsum.photos/100/100' }} className='w-10 h-10 rounded-full' />
      </View>

      <ScrollView horizontal className="flex">
        {items.map((item, index) => (
          <View key={index} className="items-center p-4 rounded-2xl">
            <TouchableOpacity className="p-2 border rounded-xl  mb-2 active:bg-[#ad23f5] shadow-md">
              <Entypo name={item.icon} size={20} color="#34004f" />
            </TouchableOpacity>
            <Text className="text-[10px] text-gray-800 text-center">{item.title}</Text>
          </View>
        ))}
      </ScrollView>


      <View className='mt-4'>
  <Text className='font-bold text-xl mb-2'>Popular Topics</Text>
  <View className='flex flex-row flex-wrap justify-between'>
    {topics.map((topic, index) => (
      <View 
        key={index} 
        className={`${topic.bgColor} w-[48%] mb-4 p-2 rounded-2xl border border-white shadow-md`}>
        <Image source={{ uri: 'https://picsum.photos/100/100' }} className='w-full h-24 rounded-xl' />
        <Text className='font-bold text-sm mt-2'>{topic.title}</Text>
        <Text className='text-[10px]'>Topic count pending...</Text>
      </View>
    ))}
  </View>
</View>






    </View>


    <View className="flex flex-wrap flex-row">
      {items.map((item, index) => (
        <View key={index} className="items-center p-4 rounded-2xl w-1/3">
          <TouchableOpacity
            className="p-2 border rounded-xl mb-2 active:bg-[#ad23f5] shadow-md"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Semi-transparent background
              backdropFilter: 'blur(10px)', // Optional: only works with Expo or react-native-blur for iOS
              borderRadius: 20,
              padding: 15,
            }}
          >
            <Entypo name={item.icon} size={33} color="#34004f" />
          </TouchableOpacity>
          <Text className="text-[10px] text-gray-800 text-center">{item.title}</Text>
        </View>
      ))}
    </View>




    </ScrollView>




  );
}
