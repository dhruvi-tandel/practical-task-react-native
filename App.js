import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HustleScreen from './src/Screens/HustleScreen';
import CustomTabBar from './src/Components/CustomTabBar';
import HomeScreen from './src/Screens/HomeScreen';

const Tab = createBottomTabNavigator();

/*Set Tab Icon for each tab */
const setTabIcon = (route, focused) => {
  let iconName;
  let customStyle = {};
  if (route.name === 'Screen1') {
    iconName = focused ? require('./src/assets/home.png') : require('./src/assets/home.png');
    customStyle = {height: 40, width: 40, tintColor:'white'};
  } else if (route.name === 'Screen2') {
    iconName = focused ? require('./src/assets/chat.png') : require('./src/assets/chat.png');
    customStyle = {height: 40, width: 40, tintColor:'white'};
  } else if (route.name === 'Screen3') {
    iconName = focused ? require('./src/assets/feedback.png') : require('./src/assets/feedback.png');
    customStyle = {height: 35, width: 35, tintColor:'white'};
  } else if (route.name === 'Screen4') {
    iconName = focused ? require('./src/assets/notification.png') : require('./src/assets/notification.png');
    customStyle = {height: 35, width: 35, tintColor:'white'};
  } else if (route.name === 'HustleScreen') {
    iconName = focused ? require('./src/assets/plus.png') : require('./src/assets/plus.png');
    customStyle = {bottom: 20, height: 40, width: 40, tintColor:'white'};
  }
  return <Image source={iconName} resizeMode="contain" style={customStyle} />;
};

const App = () => {
  
  return (
    <NavigationContainer>

      <Tab.Navigator initialRouteName='HustleScreen'
        tabBar={props => <CustomTabBar {...props} />}
  
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return setTabIcon(route, focused);
        },
        tabBarStyle: {
          backgroundColor: Platform.OS === 'android' ? 'transparent' : 'transparent',
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarShowLabel:false,
        headerShown: false,
        tabBarActiveTintColor:'orange'
      })}>
        <Tab.Screen name="Screen1" component={HomeScreen} />
        <Tab.Screen name="Screen2" component={HomeScreen} />
        <Tab.Screen
          name="HustleScreen"
          component={HustleScreen}
          options={{
            headerShown: false, 
          }}       
        />
        <Tab.Screen name="Screen3" component={HomeScreen} />
        <Tab.Screen name="Screen4" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
