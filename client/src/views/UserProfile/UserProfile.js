import {mapState, mapActions, mapGetters} from 'vuex'
import {USER_BY_ID, GET_USER_BY_ID} from '../../../constants'

export default {
  name: 'UserProfile',
  components: {},
  created() {
    this[USER_BY_ID](this.$route.params.id)
  },
  computed: {
    ...mapState({
      isFetching: state => state.userMod.isFetching
    }),
    ...mapGetters([GET_USER_BY_ID]),
    user() {
      console.log(this[GET_USER_BY_ID](parseInt(this.$route.params.id)))
      return JSON.parse(JSON.stringify(this[GET_USER_BY_ID](parseInt(this.$route.params.id))))
    }
  },
  methods: {
    ...mapActions([USER_BY_ID])
  }
}
