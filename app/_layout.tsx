import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';

const RootLayout = () => {
  return (
    <>
      <SafeAreaView className='flex-1 bg-black'>
        {/* Stack Navigation */}
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: '#000' },
            headerTintColor: '#fff',
            contentStyle: { backgroundColor: '#000' },
          }}
        >
          <Stack.Screen
            name='(tabs)'
            options={{ title: 'tabs', headerShown: false }}
          />
        </Stack>
      </SafeAreaView>
    </>
  );
};

export default RootLayout;
