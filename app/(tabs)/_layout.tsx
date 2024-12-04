import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabLayout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "white" }}>
      <Text>_layout</Text>
    </Tabs>
  );
};

export default TabLayout;
