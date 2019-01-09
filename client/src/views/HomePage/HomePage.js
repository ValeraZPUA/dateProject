import {mapState, mapActions} from 'vuex'
import {USERS} from '../../../constants'
import UserItem from '../../components/UserItem/UserItem.vue'

export default {
  name: 'HomePage',
  components: {
    UserItem
  },
  created() {
    this[USERS]()
  },
  computed: {
    ...mapState({
      users: state => state.users,
      isFetching: state => state.isFetching,
      error: state => state.error
    })
  },
  methods: {
    ...mapActions([USERS])
  }
}
