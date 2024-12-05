import * as Location from 'expo-location';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

const HomePage = () => {
  useEffect(() => {
    console.log(Location);
  }, []);

  return (
    <View className='flex-1 items-center justify-center'>
      <Text className='text-2xl font-bold'>Tabs Home</Text>
    </View>
  );
};

export default HomePage;
