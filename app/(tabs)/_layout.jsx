import { Tabs } from 'expo-router';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';

export default function TabLayout() {
  return (
    <View className="flex-1">
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 16,
            left: 20,
            right: 20,
            backgroundColor: '#34004f', // Tailwind's green-700
            borderRadius: 30,
            height: 60,
            paddingHorizontal: 10,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
          },
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#a1a1aa', // Tailwind's gray-400
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="classes"
          options={{
            title: 'Classes',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="book-education" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="attendance"
          options={{
            title: 'Attendance',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="calendar-check" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="notification"
          options={{
            title: 'Notification',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" size={28} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" size={28} color={color} />
            ),
          }}
        />
      </Tabs>
    </View>
  );
}
