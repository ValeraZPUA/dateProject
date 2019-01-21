import {mapState, mapActions} from 'vuex'
import {USER_BY_ID} from '../../../constants'
import ModalWindowDelProf from '../../components/ModalWindowDelProf/ModalWindowDelProf.vue'
import ModalWindowUpdProf from '../../components/ModalWindowUpdProf/ModalWindowUpdProf.vue'

export default {
  name: 'MyProfile',
  components: {
    ModalWindowDelProf,
    ModalWindowUpdProf
  },
  data() {
    return {
      showModalDelete: false,
      showModalUpdate: false
    }
  },
  created() {
    this[USER_BY_ID](localStorage.getItem('id'))
  },
  computed: {
    ...mapState({
      user: state => state.userMod.usr,
      isFetching: state => state.isFetching,
      error: state => state.userMod.error
    })
  },
  methods: {
    ...mapActions([USER_BY_ID])
  }
}
