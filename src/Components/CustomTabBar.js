import React from 'react';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {View, Image} from 'react-native';
const CustomTabBar = props => {
  return (
    <View
      style={{
        backgroundColor: 'black',
      }}>
      <Image
        source={require('../assets/tab_background.png')}
        resizeMode="cover"
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          height: 48,
          shadowColor: '#E5E5E5',
          shadowOffset: {height: 0, width: 0},
          shadowOpacity: 1,
          shadowRadius: 5,
          
        }}
      />
      <BottomTabBar {...props} />
    </View>
  );
};

export default CustomTabBar;
