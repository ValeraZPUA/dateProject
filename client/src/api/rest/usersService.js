import {restURL} from '../baseURL'
import axios from 'axios'

export const getAllUsers = () => axios.get(restURL + '/user')

export const getUserById = (uid) => axios.get(restURL + '/user/' + uid)

export const login = (formData) => axios.post(restURL + '/login', formData)

export const createUser = (formData) => axios.post(restURL + '/user', formData)

