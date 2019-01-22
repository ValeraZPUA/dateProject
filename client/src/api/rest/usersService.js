import {restURL} from '../baseURL'
import axios from 'axios'

const auth = {
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem('Access Token')
  }
}

const id = {
  params: {id: localStorage.getItem('id')}
}

export const getAllUsers = () => axios.get(restURL + '/user', auth)

export const getUserById = (uid) => axios.get(restURL + '/user/' + uid, auth)

export const login = (formData) => axios.post(restURL + '/login', formData)

export const createUser = (formData) => axios.post(restURL + '/user', formData)

export const updateUser = (formData) => axios.put(restURL + '/user/' + id.params.id, formData, auth)

export const updateUserByAdmin = (formData) => axios.put(restURL + '/admin/', formData, auth)

export const deleteUser = () => axios.delete(restURL + '/user/' + id.params.id, auth)

export const uploadPhoto = (formData) => axios.post(restURL + '/photo/upload/' + id.params.id, formData, auth)

export const deletePhoto = (namePhoto) => axios.delete(restURL + '/photo/delete/' + id.params.id + '&' + namePhoto, auth)

export const updatePhoto = (formData) => axios.put(restURL + '/photo/update/' + id.params.id + '&' + formData.get('txt'), formData, auth)

export const uploadProfilePicture = (formData) => axios.put(restURL + '/photo/avatar/' + id.params.id, formData, auth)

export const getCurrentUserAllPhotos = () => axios.get(restURL + '/photo/get/' + id.params.id, auth)

export const getPhotoById = (id) => axios.get(restURL + '/photo/get/' + id, auth)
