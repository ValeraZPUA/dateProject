import {mapState, mapActions} from 'vuex'
import {USERS} from '../../../constants'
import Paginator from '../../components/Paginator/Paginator.vue'

export default {
  name: 'Users',
  components: {
    Paginator
  },
  created() {
    this[USERS]()
  },
  computed: {
    ...mapState({
      users: state => state.userMod.users,
      isFetching: state => state.isFetching,
      error: state => state.userMod.error
    })
  },
  methods: {
    ...mapActions([USERS])
  }
}
