import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

function ExampleScreenOne() {
  const { navigate } = useNavigation()
  return (
    <View style={styles.container}>
      <Text
        onPress={() => navigate('ExampleScreenTwo')}
        style={styles.text}
      >
        ExampleScreenOne
      </Text>
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

export default ExampleScreenOne
