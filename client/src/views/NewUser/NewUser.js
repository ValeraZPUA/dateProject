import {mapState, mapActions} from 'vuex'
import {NEW_USER} from '../../../constants'

export default {
  name: 'NewUser',
  components: {},
  created() {
    this[NEW_USER]({
      firstName: 'Name',
      lastName: 'LastName',
      email: '0@gmail.com',
      password: 'password',
      gender: 'man',
      birthday: '2001-01-04',
      intention: 'friendship',
      role: 'user'
    })
  },
  computed: {
    ...mapState({
      users: state => state.createNewUser.users,
      isFetching: state => state.createNewUser.isFetching,
      error: state => state.createNewUser.error
    })
  },
  methods: {
    ...mapActions([NEW_USER])
  }
}
