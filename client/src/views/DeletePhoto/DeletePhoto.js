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
  created() {

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
      this.namePhoto = this.$refs.imgName;
    },
    submitFile() {
      this[DELETE_PHOTO](this.namePhoto)
      console.log(this.namePhoto)
    },
    ...mapActions([DELETE_PHOTO])
  }
}
