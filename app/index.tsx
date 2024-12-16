import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const myImage = require('../assets/avatar.jpeg')
const expo = require('../assets/expo.png')
const profile = () => {
  return (
    <View style={styles.container} className='flex flex-col justify-center items-center p-4 gap-4'>

    <Image source={expo} className='h-12 w-12'/>
      <Text className='text-3xl font-play text-center'>This is aman learning react-native from scratch.</Text>
    <Image source={myImage} className='h-[300px] w-full  rounded-xl'/>
      <Link href="/profile" asChild>
        <TouchableOpacity className='w-full bg-black p-2 rounded-lg mt-2'>
          <Text className='text-white text-center text-xl' >Go to profile</Text>
        </TouchableOpacity>
       </Link>
    </View>
  )
}

export default profile


const styles = StyleSheet.create({
  container: {

  },
});