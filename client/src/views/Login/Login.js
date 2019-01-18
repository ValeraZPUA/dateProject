import {mapState, mapActions} from 'vuex'
import {LOGIN} from '../../../constants'

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      email: '',
      password: '',
      //arr: []
      arr: {}
    }
  },
  created() {

  },
  computed: {
    ...mapState({
      users: state => state.authMod.users,
      isFetching: state => state.authMod.isFetching,
      error: state => state.authMod.error
    })
  },
  methods: {
    handle() {
      this.email = this.$refs.email.value
      this.password = this.$refs.password.value
    },
    submit() {
      // this[LOGIN]({email: this.email, password: this.password})
      // this.$router.push('/')

      // this.arr.push({email: this.email})
      // this.arr.push({password: this.password})

      if (this.email) {
        this.arr.email = this.email
      } else {
        delete this.arr.email
      }
      if (this.password) {
        this.arr.password = this.password
      } else {
        delete this.arr.password
      }
      this[LOGIN](this.arr)
      this.$router.push('/')
    },
    ...mapActions([LOGIN])
  }
}
