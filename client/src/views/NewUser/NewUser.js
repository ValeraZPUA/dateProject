import {mapState, mapActions} from 'vuex'
import {NEW_USER} from '../../../constants'

export default {
  name: 'NewUser',
  components: {},
  created() {
    this[NEW_USER]({
      firstName: 'Name3',
      lastName: 'LastName3',
      email: 'test3@gmail.com',
      password: 'password',
      gender: 'man',
      birthday: '2001-01-04',
      intention: 'friendship',
      role: 'user'
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
    ...mapActions([NEW_USER])
  }
}
