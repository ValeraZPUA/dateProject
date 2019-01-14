import {mapState, mapActions} from 'vuex'
import {PHOTO} from '../../../constants'
import PhotoItem from '../../components/PhotoItem/PhotoItem.vue'

export default {
  name: 'Photos',
  components: {
    PhotoItem
  },
  created() {
    this[PHOTO]()
  },
  computed: {
    ...mapState({
      photos: state => state.photoMod.photos,
      isFetching: state => state.photoMod.isFetching,
      error: state => state.photoMod.error
    })
  },
  methods: {
    ...mapActions([PHOTO])
  }
}
