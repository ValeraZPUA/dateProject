import {mapState, mapActions} from 'vuex'
import {UPDATE_PHOTO} from '../../../constants'

export default {
  name: 'UpdatePhoto',
  components: {},
  data() {
    return {
      namePhoto: '',
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
      this.namePhoto = this.$refs.nameToUpdate.value;
      this.file = this.$refs.newImage.files[0];
    },
    submitFile() {
      const formData = new FormData();
      formData.append('txt', this.namePhoto);
      formData.append('image', this.file);
      this[UPDATE_PHOTO](formData);
    },
    ...mapActions([UPDATE_PHOTO])
  }
}
