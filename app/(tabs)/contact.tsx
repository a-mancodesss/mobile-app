import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const contact = () => {
  return (
    <View>
      <Text>contact Page for you </Text>
      <Link href="/profile">
      <Button title='Go to your profile' ></Button>
      </Link>
    </View>
  )
}

export default contact

const styles = StyleSheet.create({})