import axios from 'axios'
import store from '@/store/store'

export default () => {
    return axios.create({
        baseURL: 'http://localhost:5000/',
        headers: {
            Auth: `Bearer ${store.state.token}`
        }
    })
}