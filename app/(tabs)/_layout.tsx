import { Tabs } from 'expo-router';
import React from 'react';

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
        headerShown: false,
      }}
    >
      <Tabs.Screen name='index' options={{ title: 'Home' }} />
      <Tabs.Screen name='about' options={{ title: 'About' }} />
      <Tabs.Screen name='contact' options={{ title: 'Contact' }} />
    </Tabs>
  );
};

export default TabLayout;
