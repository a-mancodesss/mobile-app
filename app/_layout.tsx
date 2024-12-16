import { Slot, Stack } from 'expo-router';
import "../global.css";
import { View } from 'react-native';
export default function RootLayout() {
  return (
    <View className='px-4 mt-4' >
      <Slot/>
    </View>
  );
}
