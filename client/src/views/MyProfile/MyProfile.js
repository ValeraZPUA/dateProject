import {mapState, mapActions} from 'vuex'
import {UPDATE_PHOTO, USER_BY_ID} from '../../../constants'
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
      showModalUpdate: false,
      showModalAvatar: false,
      file: ''
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
    getProfileUrl () {
      if (this.user.profilePicture) {
        return { 'background-image': `url('${this.user.profilePicture}')` }
      } else {
        return { 'background-image': `url('https://static.thenounproject.com/png/994628-200.png')`}
      }
    },
    handleFileUpload() {
      //this.namePhoto = this.$refs.nameToUpdate.value;
      this.file = this.$refs.newImage.files[0];
    },
    submitFile() {
      const formData = new FormData();
      formData.append('image', this.file);
      this[UPDATE_PHOTO](formData);
    },
    ...mapActions([UPDATE_PHOTO]),
    ...mapActions([USER_BY_ID])
  }
}
