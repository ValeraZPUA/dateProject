import {restURL} from '../baseURL'
import axios from 'axios'

export const getAllUsers = () => axios.get(restURL + '/user')

export const getUserById = (uid) => axios.get(restURL + '/user/' + uid)
