import {mapState, mapActions} from 'vuex'
import {NEW_PHOTO, PHOTO} from '../../../constants'
import PhotoItem from '../../components/PhotoItem/PhotoItem.vue'

export default {
  name: 'Photos',
  components: {
    PhotoItem
  },
  data() {
    return {
      file: ''
    }
  },
  created() {
    this[PHOTO]()
  },
  computed: {
    ...mapState({
      photos: state => state.photoMod.photos,
      error: state => state.photoMod.error
    })
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      const formData = new FormData();
      formData.append('txt', this.namePhoto);
      formData.append('image', this.file);
      this[NEW_PHOTO](formData)
      location.reload();
    },
    ...mapActions([NEW_PHOTO]),
    ...mapActions([PHOTO])
  }
}





// import {mapState, mapActions} from 'vuex'
// import {PHOTO} from '../../../constants'
// import PhotoItem from '../../components/PhotoItem/PhotoItem.vue'
//
// export default {
//   name: 'Photos',
//   components: {
//     PhotoItem
//   },
//   created() {
//     this[PHOTO]()
//   },
//   computed: {
//     ...mapState({
//       photos: state => state.photoMod.photos,
//       isFetching: state => state.photoMod.isFetching,
//       error: state => state.photoMod.error
//     })
//   },
//   methods: {
//     ...mapActions([PHOTO])
//   }
// }
