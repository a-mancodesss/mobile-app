import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState<Boolean>(false)
  return (
    <SafeAreaView>
      <Text>This is my About pageeee</Text>
      <Button title='click to draw drawer' onPress={()=>setIsDrawerOpen(true)}></Button>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})