import {mapState, mapActions} from 'vuex'
import {DELETE_PHOTO} from '../../../constants'
import ModalWindow from '../../components/ModalWindow/ModalWindow.vue'

export default {
  name: 'PhotoItem',
  components: {
    ModalWindow
  },
  props: {
    current: Object
  },
  data () {
    return {
      showModal: false
    }
  },
  computed: {
    ...mapState({
        photos: state => state.photoMod.photos,
        error: state => state.photoMod.error
    })
  },
  methods: {
    del () {
      this[DELETE_PHOTO](this.current.photoName)
      location.reload()
    },
    ...mapActions([DELETE_PHOTO])
  }
}
