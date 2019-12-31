import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID d8f462cc9388f44a83b77afeb74ba5779a261b5c82bf584f444ba0418c5584a2'
  }
})
