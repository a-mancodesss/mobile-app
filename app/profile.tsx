import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View  className='flex flex-col justify-center items-center p-4 gap-4'>
      <Text className='text-3xl'>This is my profile page.</Text>
      <Link href={"/"} className='text-xl text-white text-center w-full bg-black p-2 rounded-lg mt-2'> Home Page</Link>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({})