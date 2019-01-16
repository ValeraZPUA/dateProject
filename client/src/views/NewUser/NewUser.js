import {mapState, mapActions} from 'vuex'
import {NEW_USER} from '../../../constants'

export default {
  name: 'NewUser',
  components: {},
  created() {
    this[NEW_USER]({
      firstName: 'Vit9',
      lastName: 'Kek',
      email: 'kek@gmail.com',
      password: 'password',
      gender: 'man',
      birthday: '1980-03-15',
      intention: 'date'
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
