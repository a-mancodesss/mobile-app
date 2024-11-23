import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View,Text } from 'react-native';

//generate homescreen and profilescreen component simply saying this is <component> page

export const HomeScreen = () => {
    return (
        <View>
        <Text>Home Screen</Text>
        </View>
    );
    }
  export  const ProfileScreen = () => {
    return (
        <View>
        <Text>Profile Screen</Text>
        </View>
    );
    }


    const Tab = createMaterialTopTabNavigator();
    
    export default function MyTabs() {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
      );
    }