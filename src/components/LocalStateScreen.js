import React, { useState } from 'react'
import {
  TouchableOpacity, Text, View, StyleSheet
} from 'react-native'
import { useNavigation } from 'react-navigation-hooks'

function LocalStateScreen() {
  const { navigate } = useNavigation()
  const [counter, updateCounter] = useState(20)

  return (
    <View style={styles.containerStyle}>
      <Text style={{ margin: 10 }}>Update using local state (Hooks)</Text>
      <Text style={{ margin: 10 }}>Current Counter is: {counter}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => updateCounter(prevState => prevState + 1)}
        >
          <Text style={styles.buttonTextStyle}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => updateCounter(prevState => prevState - 1)}
        >
          <Text style={styles.buttonTextStyle}>-</Text>
        </TouchableOpacity>
      </View>
      <Text onPress={() => navigate('ReduxStateScreen')}>Tap to navigate to Redux counter</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  buttonStyle: {
    backgroundColor: '#90ee90',
    padding: 5,
    paddingHorizontal: 20,
    borderRadius: 15,
    margin: 10
  },
  buttonTextStyle: {
    color: 'white',
    fontSize: 20
  }
})

export default LocalStateScreen
