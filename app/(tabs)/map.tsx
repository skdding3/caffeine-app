import {
  NaverMapCircleOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';
import * as Location from 'expo-location';
import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, View } from 'react-native';

const map = () => {
  // * STATE
  const navigation = useNavigation();
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

  const getLocation = async () => {
    try {
      // 위치 권한 요청
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('위치 정보를 가져올 권한이 없습니다.');
        return;
      }

      // 현재 위치 가져오기
      const currentLocation = await Location.getCurrentPositionAsync();
      console.log('currentLocation', currentLocation);

      const { latitude, longitude } = currentLocation.coords;
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log(reverseGeocode);
      // setLocation({
      //   reverseGeocode,
      //   // latitude: currentLocation.coords.latitude,
      //   // longitude: currentLocation.coords.longitude,
      // });
    } catch (error) {
      Alert.alert('위치 정보를 가져오는 중 오류가 발생했습니다.');
      console.error(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);
  return (
    <>
      <View className='flex-1 '>
        <NaverMapView
          isShowLocationButton={true}
          style={{ width: '100%', height: '100%' }}
          camera={{
            latitude: 37.50497126,
            longitude: 127.04905021,
          }}
          isExtentBoundedInKorea={true}
        >
          <NaverMapCircleOverlay
            latitude={37.50497126}
            longitude={127.04905021}
          />
        </NaverMapView>
      </View>
    </>
  );
};

export default map;
