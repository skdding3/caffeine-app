import { Slot } from 'expo-router';
import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

const RootLayout = () => {
  return (
    <>
      <SafeAreaView className='bg-slate-400 text-neutral-800 py-2 px-4'>
        <Text className='text-neutral-800'>Layout Header</Text>
      </SafeAreaView>
      <Slot />
    </>
  );
};

export default RootLayout;
