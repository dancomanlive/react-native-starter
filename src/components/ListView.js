import React from 'react'
import {
  View, Image, Text, FlatList, StyleSheet, TouchableOpacity
} from 'react-native'
import { emptyImage } from '../api/constants'

const ListView = (props) => (
  <View style={styles.container}>
    <FlatList
      style={styles.list}
      data={props.data}
      horizontal={false}
      numColumns={2}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={el => (
        <TouchableOpacity
          onPress={() => {
            if (props.photos) {
              props.navigate('PhotoDetail', { photo: el.item })
              return
            }
            props.navigate('Photos', { albumInfo: el.item })
          }}
          style={styles.card}
        >
          <View style={styles.imageContainer}>
            <Image
              style={styles.cardImage}
              source={{ uri: props.photos ? el.item.thumbnailUrl : emptyImage }}
            />
          </View>
          <View style={styles.cardContent}>
            <Text style={styles.title}>{el.item.title}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  </View>
)

export default ListView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  list: {
    paddingHorizontal: 10
  },
  separator: {
    marginTop: 10
  },
  card: {
    marginVertical: 8,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 10
  },
  cardContent: {
    paddingVertical: 17,
    justifyContent: 'space-between'
  },
  cardImage: {
    flex: 1,
    height: 150,
    width: null,
  },
  imageContainer: {},
  title: {
    fontSize: 18,
    flex: 1,
    color: '#778899'
  },
  count: {
    fontSize: 18,
    flex: 1,
    color: '#B0C4DE'
  }
})
