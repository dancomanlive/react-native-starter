import { FETCH_ALBUMS } from './types'
import { albumsUrl } from '../api/constants'

export const getAlbums = () => async dispatch => {
  try {
    const response = await fetch(albumsUrl)
    const json = await response.json()
    console.log('json', json)
    if (json.length > 0) {
      dispatch({ type: FETCH_ALBUMS, payload: json })
    }
  } catch (error) {
    console.log('error', error)
  }
}
