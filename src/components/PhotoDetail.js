import React from 'react'
import { useNavigationParam, useNavigation } from 'react-navigation-hooks'
import { Text, View, StyleSheet, Image, Button } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteItem } from '../actions/actions'

function deletePhoto(id, dispatch, goBack) {
  dispatch(deleteItem(id))
  goBack()
}

function PhotoDetail() {
  const photo = useNavigationParam('photo')
  const { goBack } = useNavigation()
  const dispatch = useDispatch()
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ alignSelf: 'center', margin: 10 }}>Photo details</Text>
      <Button onPress={() => deletePhoto(photo.id, dispatch, goBack)} title="Delete photo"/>
      <View style={styles.main}>
        <Text style={{ margin: 10 }}>{photo.title}</Text>
        <Image
          style={styles.cardImage}
          source={{ uri: photo.thumbnailUrl }}
        />
      </View>
    </View>
  )
}

export default PhotoDetail

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  cardImage: {
    width: 250,
    height: 250,
  },
})
