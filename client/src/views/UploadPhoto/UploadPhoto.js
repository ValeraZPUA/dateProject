import {mapState, mapActions} from 'vuex'
import {NEW_PHOTO} from '../../../constants'

export default {
  name: 'UploadPhoto',
  components: {},
  data() {
    return {
      file: ''
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
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      this[NEW_PHOTO](this.file)
    },
    ...mapActions([NEW_PHOTO])
  }
}
