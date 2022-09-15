import axios from 'axios';
import { API_URL } from '../constants/apiUrl'

const SHOWS_URL = `${API_URL}/shows`

export const fetchShows = (page = 1) => {
  return axios.get(SHOWS_URL, null, { params: { page } }).then(response => {
    const shows = response.data
    console.log({ shows });

    return shows;
  }).catch(console.error)
}
