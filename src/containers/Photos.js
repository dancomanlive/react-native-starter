import React from 'react'
import {
  TouchableOpacity, Text, View, StyleSheet
} from 'react-native'
// import { useSelector, useDispatch } from 'react-redux'
// import { getAlbums } from '../actions/actions'

function Photos() {
  // const dispatch = useDispatch()
  // const albums = useSelector(state => state.albums)

  return (
    <View style={styles.containerStyle}>
      <Text style={{ margin: 10 }}>Photos</Text>
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

export default Photos
