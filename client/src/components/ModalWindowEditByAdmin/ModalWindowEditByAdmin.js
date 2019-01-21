import {mapActions} from "vuex";
import {UPDATE_USER_BY_ADMIN} from "../../../constants";

export default {
  name: 'ModalWindow',
  props: {
    current: Object
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      gender: '',
      intention: '',
      id: this.current.id,
      arr: {}
    }
  },
  methods: {
    handle() {
      this.firstName = this.$refs.firstName.value
      this.lastName = this.$refs.lastName.value
      this.gender = this.$refs.gender.value
      this.intention = this.$refs.intention.value
    },
    submit() {
      this.arr.id = this.id
      if (this.firstName) {
        this.arr.firstName = this.firstName
        this.$refs.firstName.value = ''
      } else {
        delete this.arr.firstName
      }
      if (this.lastName) {
        this.arr.lastName = this.lastName
        this.$refs.lastName.value = ''
      } else {
        delete this.arr.lastName
      }
      if (this.gender) {
        this.arr.gender = this.gender
        this.$refs.gender.value = ''
      } else {
        delete this.arr.gender
      }
      if (this.intention) {
        this.arr.intention = this.intention
        this.$refs.intention.value = ''
      } else {
        delete this.arr.intention
      }
      this[UPDATE_USER_BY_ADMIN](this.arr)
      this.$router.push('/userspag')
      location.reload()
    },
    ...mapActions([UPDATE_USER_BY_ADMIN])
  }
}
