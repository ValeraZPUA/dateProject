import {mapState, mapActions} from 'vuex'
import {DELETE_USER} from '../../../constants'

export default {
  name: 'DeleteUser',
  components: {},
  created() {
    this[DELETE_USER]()
  },
  computed: {
    ...mapState({
      users: state => state.userMod.users,
      isFetching: state => state.userMod.isFetching,
      error: state => state.userMod.error
    })
  },
  methods: {
    ...mapActions([DELETE_USER])
  }
}
