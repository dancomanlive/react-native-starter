/* eslint-disable no-undef */
import { FETCH_ALBUMS, FETCH_PHOTOS, DELETE_ITEM } from './types'
import { albumsUrl, photosUrl } from '../api/constants'

export const getAlbums = () => async dispatch => {
  try {
    const response = await fetch(albumsUrl)
    const json = await response.json()
    if (json.length > 0) {
      dispatch({ type: FETCH_ALBUMS, payload: json })
    }
  } catch (error) {
    console.log('albumError', error)
  }
}

export const getPhotos = (id) => async dispatch => {
  try {
    const response = await fetch(photosUrl(id))
    const json = await response.json()
    if (json.length > 0) {
      dispatch({ type: FETCH_PHOTOS, payload: json })
    }
  } catch (error) {
    console.log('photoError', error)
  }
}

export const deleteItem = (id) => async (dispatch, getState) => {
  const { photos } = getState()
  const newPhotos = photos.filter(photo => photo.id !== id)
  dispatch({ type: DELETE_ITEM, payload: newPhotos })
}
