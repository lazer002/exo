import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import Entypo from 'react-native-vector-icons/Entypo';
export default function SignUp() {

  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });
  const handleInputChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value
    });
  };

  const handleSignup = async () => {
    try {
  

console.log('====================================');
console.log(userData);
console.log('====================================');
 
    } catch (error) {
console.log('✌️error --->', error);

    }
  };

  return (
    <View className="flex-1">
        <View className="flex-row justify-between mb-5 py-10 px-5 h-56">
          <Text className="text-4xl text-white font-semibold w-64">Create Your Account</Text>
          <Entypo name="dots-three-horizontal" size={20} color="white" />
        </View>

        <View className="bg-white rounded-t-3xl flex-1 px-5 py-8">
          <View className="mb-5">
            <Text className="text-lg text-[#ad23f5] font-semibold ml-2">Full Name</Text>
            <TextInput
              className="border-b-[1px] border-gray-300 px-4 py-3 text-[#ad23f5]"
              placeholder="Enter your full name"
              placeholderTextColor="#aaa"
              value={userData.fullName}
              onChangeText={(value) => handleInputChange('fullName', value)}
            />
          </View>

          <View className="mb-5">
            <Text className="text-lg text-[#ad23f5] font-semibold ml-2">Email Address</Text>
            <TextInput
              className="border-b-[1px] border-gray-300 px-4 py-3 text-[#ad23f5]"
              placeholder="Enter your Email Address"
              placeholderTextColor="#aaa"
              value={userData.email}
              onChangeText={(value) => handleInputChange('email', value)}
            />
          </View>

          <View className="mb-5">
            <Text className="text-lg text-[#ad23f5] font-semibold ml-2">Phone Number</Text>
            <TextInput
              className="border-b-[1px] border-gray-300 px-4 py-3 text-[#ad23f5]"
              placeholder="Enter your phone number"
              placeholderTextColor="#aaa"
              keyboardType="phone-pad"
              value={userData.phoneNumber}
              onChangeText={(value) => handleInputChange('phoneNumber', value)}
            />
          </View>

          <View className="mb-5">
            <Text className="text-lg text-[#ad23f5] font-semibold ml-2">Password</Text>
            <TextInput
              className="border-b-[1px] border-gray-300 px-4 py-3 text-[#ad23f5]"
              placeholder="Enter your password"
              placeholderTextColor="#aaa"
              secureTextEntry
              value={userData.password}
              onChangeText={(value) => handleInputChange('password', value)}
            />
          </View>

          <Pressable
            onPress={handleSignup}
            className="py-3 px-8 rounded-3xl items-center bg-[#810fbe]"
          >
            <Text className="text-white text-lg font-semibold">SIGN UP</Text>
          </Pressable>

          <View className="absolute bottom-6 right-3 p-3">
            <View className="items-end">
              <Text className="text-lg opacity-80">Already Have Account?</Text>
              <Text
                className="text-2xl font-bold text-[#ad23f5]"
                onPress={() => navigation.navigate('signin')}
              >
                Sign In
              </Text>
            </View>
          </View>
        </View>
      </View>
  );
}

