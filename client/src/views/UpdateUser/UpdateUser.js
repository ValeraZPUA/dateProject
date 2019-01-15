import {mapState, mapActions} from 'vuex'
import {UPDATE_USER} from '../../../constants'

export default {
  name: 'UpdateUser',
  components: {},

  created() {
    this[UPDATE_USER]({
      isBanned: true
    })
  },
  computed: {
    ...mapState({
      users: state => state.userMod.users,
      isFetching: state => state.userMod.isFetching,
      error: state => state.userMod.error
    })
  },
  methods: {
    ...mapActions([UPDATE_USER])
  }
}
