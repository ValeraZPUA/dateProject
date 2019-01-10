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
      users: state => state.getUsers.users,
      isFetching: state => state.getUsers.isFetching,
      error: state => state.getUsers.error
    })
  },
  methods: {
    ...mapActions([USERS])
  }
}
