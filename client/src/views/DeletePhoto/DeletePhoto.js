import {mapState, mapActions} from 'vuex'
import {DELETE_PHOTO} from '../../../constants'

export default {
  name: 'DeletePhoto',
  components: {},
  data() {
    return {
      namePhoto: ''
    }
  },
  computed: {
    ...mapState({
      photos: state => state.photoMod.photos,
      isFetching: state => state.photoMod.isFetching,
      error: state => state.photoMod.error
    })
  },
  methods: {
    handleFileUpload() {
      this.namePhoto = this.$refs.imgName.value
    },
    submitFile() {
      this[DELETE_PHOTO](this.namePhoto)
    },
    ...mapActions([DELETE_PHOTO])
  }
}
