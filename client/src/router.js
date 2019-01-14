import Vue from 'vue'
import Router from 'vue-router'
import NewUser from './views/NewUser/NewUser.vue'
import Users from './views/Users/Users.vue'
import Login from './views/Login/Login.vue'
import StartPage from './views/StartPage/StartPage.vue'
import UpdateUser from './views/UpdateUser/UpdateUser.vue'
import DeleteUser from './views/DeleteUser/DeleteUser.vue'
import UploadPhoto from './views/UploadPhoto/UploadPhoto.vue'
import DeletePhoto from './views/DeletePhoto/DeletePhoto.vue'
import UpdatePhoto from './views/UpdatePhoto/UpdatePhoto.vue'
import Photos from './views/Photos/Photos.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'startpage',
      component: StartPage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/newuser',
      name: 'newuser',
      component: NewUser
    },
    {
      path: '/updateuser',
      name: 'updateuser',
      component: UpdateUser
    },
    {
      path: '/deleteuser',
      name: 'deleteuser',
      component: DeleteUser
    },
    {
      path: '/uploadphoto',
      name: 'uploadphoto',
      component: UploadPhoto
    },
    {
      path: '/deletephoto',
      name: 'deletephoto',
      component: DeletePhoto
    },
    {
      path: '/updatephoto',
      name: 'updatephoto',
      component: UpdatePhoto
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    }
  ]
})
