import { Link, router, Slot } from 'expo-router';
import React from 'react';
import { Button, Pressable, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

const RootLayout = () => {
  return (
    <>
      <SafeAreaView className='flex flex-row justify-between items-center bg-black text-neutral-800 py-2 px-4'>
        <View className='px-2'>
          <Pressable onPress={() => router.push('/')}>
            <Text className='font-bold text-2xl text-white'>카페인 앱 OZ</Text>
          </Pressable>
        </View>
        <View className='flex flex-row gap-6 px-2'>
          <Link href='./about' asChild>
            <Button title='About' color='white' />
          </Link>
          <Link href='./contact' asChild>
            <Button title='Contact Us' color='white' />
          </Link>
        </View>
      </SafeAreaView>
      <Slot />
    </>
  );
};

export default RootLayout;
