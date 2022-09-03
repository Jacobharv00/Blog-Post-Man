import axios from 'axios'


export default axios.create( {
  // baseUrl from ngrok expires every 2 hours for me (change every 2 hours annoying!)
  baseURL: 'http://95d0-2601-284-8204-3160-fd81-601-87f6-93da.ngrok.io'
} )