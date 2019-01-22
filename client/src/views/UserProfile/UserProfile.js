import {mapState, mapActions, mapGetters} from 'vuex'
import {USER_BY_ID, GET_USER_BY_ID, UPDATE_USER_BY_ADMIN} from '../../../constants'
import ModalWindowEditByAdmin from '../../components/ModalWindowEditByAdmin/ModalWindowEditByAdmin.vue'

export default {
  name: 'UserProfile',
  components: {
    ModalWindowEditByAdmin
  },
  data () {
    return {
      isRole: false,
      isBanned: false,
      u: '',
      showModal: false
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
    getProfileUrl () {
      if (this.u.profilePicture) {
        return { 'background-image': `url('${this.u.profilePicture}')` }
      } else {
        return { 'background-image': `url('https://static.thenounproject.com/png/994628-200.png')`}
      }
    },
    ...mapActions([USER_BY_ID]),
    ...mapActions([UPDATE_USER_BY_ADMIN])
  }
}
