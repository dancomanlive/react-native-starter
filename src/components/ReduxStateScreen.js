import React from 'react'
import {
  TouchableOpacity, Text, View, StyleSheet
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { updateCounter } from '../actions/actions'

function ReduxStateScreen() {
  const dispatch = useDispatch()
  const counter = useSelector(state => state.main.counter)

  return (
    <View style={styles.containerStyle}>
      <Text style={{ margin: 10 }}>Update using redux state (Hooks)</Text>
      <Text style={{ margin: 10 }}>Current Counter is: {counter}</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => dispatch(updateCounter(counter + 1))}
        >
          <Text style={styles.buttonTextStyle}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() => dispatch(updateCounter(counter - 1))}
        >
          <Text style={styles.buttonTextStyle}>-</Text>
        </TouchableOpacity>
      </View>
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

export default ReduxStateScreen
