import Vue from 'vue'
import Router from 'vue-router'
import NewUser from './views/NewUser/NewUser.vue'
import Login from './views/Login/Login.vue'
import StartPage from './views/StartPage/StartPage.vue'
import UpdateUser from './views/UpdateUser/UpdateUser.vue'
//import DeleteUser from './views/DeleteUser/DeleteUser.vue'
import UpdatePhoto from './views/UpdatePhoto/UpdatePhoto.vue'
import Photos from './views/Photos/Photos.vue'
import UserProfile from './views/UserProfile/UserProfile.vue'
import PhotoProfile from './views/PhotoProfile/PhotoProfile.vue'
import UsersPag from './views/UsersPag/UsersPag.vue'
import MyProfile from './views/MyProfile/MyProfile.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'startpage',
      component: StartPage,
      meta: {enterFlag: true}
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {enterFlag: true}
    },
    {
      path: '/newuser',
      name: 'newuser',
      component: NewUser,
      meta: {enterFlag: true}
    },
    {
      path: '/updateuser',
      name: 'updateuser',
      component: UpdateUser
    },
    // {
    //   path: '/deleteuser',
    //   name: 'deleteuser',
    //   component: DeleteUser
    // },
    {
      path: '/updatephoto',
      name: 'updatephoto',
      component: UpdatePhoto
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos
    },
    {
      path: '/user/:id',
      name: 'user',
      component: UserProfile
    },
    {
      path: '/photo/get/:id',
      name: 'photo',
      component: PhotoProfile
    },
    {
      path: '/userspag',
      name: 'userspag',
      component: UsersPag
    },
    {
      path: '/myprofile',
      name: 'myprofile',
      component: MyProfile
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (!to.matched.some(record => record.meta.enterFlag)) {
    if (localStorage.getItem('Access Token')) {
      next()
    } else {
      next({path: '/login'})
    }
  } else {
    next()
  }
})

export default router
