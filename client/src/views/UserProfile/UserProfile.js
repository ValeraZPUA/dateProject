import {mapState, mapActions, mapGetters} from 'vuex'
import {USER_BY_ID, GET_USER_BY_ID, UPDATE_USER_BY_ADMIN} from '../../../constants'

export default {
  name: 'UserProfile',
  components: {
  },
  data () {
    return {
      isRole: false,
      isBanned: false,
      u: ''
    }
  },
  created() {
    this[USER_BY_ID](this.$route.params.id)
    if (localStorage.getItem('role') == 'admin' || localStorage.getItem('role') == 'moderator') {
      this.isRole = true
    }
  },
  computed: {
    ...mapState({
    }),
    ...mapGetters([GET_USER_BY_ID]),

    user() {
      this.u = JSON.parse(JSON.stringify(this[GET_USER_BY_ID](parseInt(this.$route.params.id))))
      this.isBanned = this.u.isBanned
      return this.u
    }
  },
  methods: {
    ban () {
      this[UPDATE_USER_BY_ADMIN]({id: this.u.id, isBanned: true})
      this.isBanned = true
    },
    unban () {
      this[UPDATE_USER_BY_ADMIN]({id: this.u.id, isBanned: false})
      this.isBanned = false
    },
    ...mapActions([USER_BY_ID]),
    ...mapActions([UPDATE_USER_BY_ADMIN])
  }
}
