// /app/index.tsx
import React from 'react';
import { Text, View } from 'react-native';

// NativeWind 의 유틸리티클래스를 사용하려면 global.css 가 로드 되어야만 합니다.
// /_layout.tsx 를 사용하기 시작하면, 이를 /_layout.tsx 로 옮겨줄 것입니다.
// import '../global.css';

const index = () => {
  return (
    <View className='bg-slate-200 py-4 px-8 '>
      <Text className='font-bold'>
        카페인 앱<Text className='text-red-500'> Test</Text>
      </Text>
    </View>
  );
};

export default index;
