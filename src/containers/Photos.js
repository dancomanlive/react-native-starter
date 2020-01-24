import React, { useEffect, useState } from 'react'
import {
  Text, View, StyleSheet, ActivityIndicator, Button
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigationParam, useNavigation } from 'react-navigation-hooks'
import { getPhotos } from '../actions/actions'
import ListView from '../components/ListView'


function shuffle(array) {
  let counter = array.length
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter)
    counter--

    let temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }
  return array
}

function Photos() {
  const [count, setCount] = useState(0)
  const albumInfo = useNavigationParam('albumInfo')
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  let photos = useSelector(state => state.photos)

  useEffect(() => {
    if (photos.length === 0
          || (photos.length > 0 && photos[0].albumId !== albumInfo.id)
    ) {
      dispatch(getPhotos(albumInfo.id))
    }
  }, [])

  if (photos.length > 0 && photos[0].albumId !== albumInfo.id) {
    photos = []
  }

  if (photos.length === 0) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  return (
    <View style={styles.containerStyle}>
      <Text style={{ margin: 10 }}>Photos</Text>
      <Button onPress={() => setCount(count + 1)} title="Shuffle"/>
      <ListView data={shuffle(photos)} navigate={navigate} photos/>
    </View>
  )
}

export default Photos

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
  },
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
