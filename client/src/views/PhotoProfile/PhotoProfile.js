import {mapState, mapActions, mapGetters} from 'vuex'
import {PHOTO_BY_ID, GET_PHOTO_BY_ID} from '../../../constants'

export default {
  name: 'PhotoProfile',
  components: {
  },
  created() {
    this[PHOTO_BY_ID](this.$route.params.id)
  },
  computed: {
    ...mapState({
    }),
    ...mapGetters([GET_PHOTO_BY_ID]),

    photo() {
      return JSON.parse(JSON.stringify(this[GET_PHOTO_BY_ID](parseInt(this.$route.params.id))))
    }
  },
  methods: {
    ...mapActions([PHOTO_BY_ID])
  }
}
