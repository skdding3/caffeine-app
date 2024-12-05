import {
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';

import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

const map = () => {
  // * STATE
  const navigation = useNavigation();
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  // const getCurrentLocation = async () => {
  //   let { status } = await Location.requestForegroundPermissionsAsync();
  //   if (status !== 'granted') {
  //     Alert.alert('Permission to access location was denied');
  //     return;
  //   }

  //   const location = await Location.getCurrentPositionAsync({
  //     accuracy: Location.Accuracy.High,
  //   });
  //   setLocation({
  //     latitude: location.coords.latitude,
  //     longitude: location.coords.longitude,
  //   });
  // };

  useEffect(() => {
    // getCurrentLocation();
  }, []);
  return (
    <>
      <View className='flex-1 '>
        <NaverMapView
          isShowLocationButton={true}
          style={{ width: '100%', height: '100%' }}
        >
          <NaverMapMarkerOverlay
            latitude={location.latitude}
            longitude={location.longitude}
          >
            {/* <View style={{ width: 100, height: 100 }} /> */}
          </NaverMapMarkerOverlay>
        </NaverMapView>
      </View>
    </>
  );
};

export default map;
