export default {
  name: 'StartPage',
  components: {

  },
  data () {
    return {
      isLogin: false
    }
  },
  created() {
     if (localStorage.getItem('Access Token')) {
       this.isLogin = true
     } else {
       this.isLogin = false
     }
  },
  computed: {

  },
  methods: {
    logout () {
      localStorage.removeItem('Access Token')
      localStorage.removeItem('id')
      localStorage.removeItem('role')
    }
  }
}
