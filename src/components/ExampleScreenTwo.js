import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function ExampleScreenTwo() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ExampleScreenTwo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
})

export default ExampleScreenTwo
