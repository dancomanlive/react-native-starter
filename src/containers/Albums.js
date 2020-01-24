import React, { useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import { useSelector, useDispatch } from 'react-redux'
import { getAlbums } from '../actions/actions'
import ListView from '../components/ListView'

function Albums() {
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const albums = useSelector(state => state.albums)

  useEffect(() => {
    if (albums.length === 0) {
      dispatch(getAlbums())
    }
  }, [])

  return (
    <View style={styles.containerStyle}>
      <Text style={{ margin: 10 }}>Albums</Text>
      <ListView data={albums} navigate={navigate}/>
    </View>
  )
}

export default Albums

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
