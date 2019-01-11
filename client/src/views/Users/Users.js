import {mapState, mapActions} from 'vuex'
import {USERS} from '../../../constants'
import UserItem from '../../components/UserItem/UserItem.vue'

export default {
  name: 'Users',
  components: {
    UserItem
  },
  created() {
    this[USERS]()
  },
  computed: {
    ...mapState({
      users: state => state.userMod.users,
      isFetching: state => state.userMod.isFetching,
      error: state => state.userMod.error
    })
  },
  methods: {
    ...mapActions([USERS])
  }
}
