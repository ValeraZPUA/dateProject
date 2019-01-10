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
      users: state => state.auth.users,
      isFetching: state => state.auth.isFetching,
      error: state => state.auth.error
    })
  },
  methods: {
    ...mapActions([LOGIN])
  }
}
