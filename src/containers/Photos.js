import React, { useEffect, useMountEffect } from 'react'
import {
  Text, View, StyleSheet, ActivityIndicator
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigationParam, useNavigation } from 'react-navigation-hooks'
import { getPhotos } from '../actions/actions'
import ListView from '../components/ListView'

function Photos() {
  const albumInfo = useNavigationParam('albumInfo')
  const { navigate } = useNavigation()
  const dispatch = useDispatch()
  const photos = useSelector(state => state.photos)

  useEffect(() => {
    if (photos.length === 0
          || (photos.length > 0 && photos[0].albumId !== albumInfo.id)
    ) {
      dispatch(getPhotos(albumInfo.id))
    }
  }, [])

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
      <ListView data={photos} navigate={navigate} photos />
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
