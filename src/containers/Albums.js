import React, { useEffect } from 'react'
import {
  TouchableOpacity, Text, View, StyleSheet
} from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { useSelector, useDispatch } from 'react-redux'
import { getAlbums } from '../actions/actions'

function Albums() {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const albums = useSelector(state => state.albums)

  useEffect(() => {
    if (albums.length === 0) {
      console.log('dispatching')
      dispatch(getAlbums())
    }
  }, [])

  return (
    <View style={styles.containerStyle}>
      <Text onPress={() => navigate('Photos')}>Tap to navigate to Photos</Text>
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

export default Albums
