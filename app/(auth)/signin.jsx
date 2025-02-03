import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, StyleSheet } from 'react-native';
import { Link, router } from 'expo-router';
import Entypo from 'react-native-vector-icons/Entypo';
export default function SignIn() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (field, value) => {
    setCredentials((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignin = () => {
    // Add your sign-in logic here
    console.log('Signing in with:', credentials);
    // Example: Call your authentication API here
  };

  return (

    <View className="flex-1">
    <View className="flex-row justify-between mb-5 py-10 px-5 h-56">
      <Text className="text-4xl text-white font-semibold">Hello! Sign In</Text>
      <Entypo name="dots-three-horizontal" size={20} color="white" />
    </View>

    <View className="bg-white rounded-t-3xl flex-1 px-5 py-8">
      {/* Email Field */}
      <View className="mb-5">
        <Text className="text-lg text-[#ad23f5] font-semibold ml-2">Email Address</Text>
        <TextInput
          className="border-b-[1px] border-gray-300 px-4 py-3 text-[#ad23f5]"
          placeholder="Enter your Email Address"
          placeholderTextColor="#aaa"
          keyboardType="email-address"
          value={credentials.email}
          onChangeText={(value) => handleInputChange('email', value)}
        />
      </View>

      {/* Password Field */}
      <View className="mb-5">
        <Text className="text-lg text-[#ad23f5] font-semibold ml-2">Password</Text>
        <TextInput
          className="border-b-[1px] border-gray-300 px-4 py-3 text-[#ad23f5]"
          placeholder="Enter your password"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={credentials.password}
          onChangeText={(value) => handleInputChange('password', value)}
        />
      </View>

      {/* Forgot Password */}
      <View className="mb-5 flex justify-end text-center items-end">
        <Text
          className="ju items-end text-lg text-[#ad23f5] font-semibold ml-2"
          onPress={() => navigation.navigate('ForgotPassword')}
        >
          Forgot Password?
        </Text>
      </View>

      {/* Sign In Button */}
      <Pressable onPress={handleSignin} className="py-3 px-8 rounded-3xl items-center bg-[#810fbe]">
        <Text className="text-white text-lg font-semibold">SIGN IN</Text>
      </Pressable>

      {/* Navigate to Signup */}
      <View className="absolute bottom-6 right-3 p-3">
        <View className="items-end">
          <Text className="text-lg opacity-80">Don't Have an Account?</Text>
          <Text
            className="text-2xl font-bold text-[#ad23f5]"
            onPress={() => navigation.navigate('signup')}
          >
            Sign Up
          </Text>
        </View>
      </View>
    </View>
  </View>
  );
}

