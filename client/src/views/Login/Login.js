import {mapState, mapActions} from 'vuex'
import {LOGIN} from '../../../constants'

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      email: '',
      password: '',
      emailAndPassword: {}
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
      if (this.email) {
        this.emailAndPassword.email = this.email
      } else {
        delete this.emailAndPassword.email
      }
      if (this.password) {
        this.emailAndPassword.password = this.password
      } else {
        delete this.emailAndPassword.password
      }
      this[LOGIN](this.emailAndPassword)
      this.$router.replace('/')
    },
    ...mapActions([LOGIN])
  }
}
