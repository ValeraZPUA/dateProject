import {mapActions, mapState} from "vuex";
import {DELETE_USER} from "../../../constants";

export default {
  name: 'ModalWindowDelProf',
  props: {
    //current: Object
  },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      users: state => state.userMod.users,
      isFetching: state => state.userMod.isFetching,
      error: state => state.userMod.error
    })
  },
  methods: {
    del() {
      this[DELETE_USER]()
      this.$router.push('/')
    },
    ...mapActions([DELETE_USER])
  }
}
