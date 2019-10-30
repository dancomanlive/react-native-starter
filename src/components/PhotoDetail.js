import React from 'react'
import { useNavigationParam } from 'react-navigation-hooks'
import {
  Text, View, StyleSheet, Image
} from 'react-native'

function PhotoDetail() {
  const photo = useNavigationParam('photo')
  return (
    <View style={styles.containerStyle}>
      <Text style={{ margin: 10 }}>{photo.title}</Text>
      <Image
        style={styles.cardImage}
        source={{ uri: photo.thumbnailUrl }}
      />
    </View>
  )
}

export default PhotoDetail

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  cardImage: {
    width: 250,
    height: 250,
  },
})
