import {mapState, mapActions} from 'vuex'
import {LOGIN} from '../../../constants'

export default {
  name: 'Login',
  components: {

  },
  created() {
    this[LOGIN]({email: 'test@gmail.com', password: 'password'})
  },
  computed: {
    ...mapState({
      users: state => state.authMod.users,
      isFetching: state => state.authMod.isFetching,
      error: state => state.authMod.error
    })
  },
  methods: {
    ...mapActions([LOGIN])
  }
}
