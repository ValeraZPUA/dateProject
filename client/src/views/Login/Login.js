import {mapState, mapActions} from 'vuex'
import {LOGIN} from '../../../constants'

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      email: '',
      password: ''
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
      this[LOGIN]({email: this.email, password: this.password})
    },
    ...mapActions([LOGIN])
  }
}
