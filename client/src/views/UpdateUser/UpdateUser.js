import {mapState, mapActions} from 'vuex'
import {UPDATE_USER} from '../../../constants'
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
  name: 'UpdateUser',
  components: {
    DatePick
  },
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      gender: '',
      birthday: '',
      intention: '',
      arr: {},
    }
  },
  created() {

  },
  computed: {
    ...mapState({
      users: state => state.userMod.users,
      error: state => state.userMod.error
    })
  },
  methods: {
    handle() {
      this.email = this.$refs.email.value
      this.password = this.$refs.password.value
      this.firstName = this.$refs.firstName.value
      this.lastName = this.$refs.lastName.value
      this.gender = this.$refs.gender.value
      this.birthday = this.$refs.birthday.value
      this.intention = this.$refs.intention.value
    },
    submit() {
      if (this.email) {
        this.arr.email = this.email
      } else {
        delete this.arr.email
      }
      if (this.password) {
        this.arr.password = this.password
      } else {
        delete this.arr.password
      }
      if (this.firstName) {
        this.arr.firstName = this.firstName
      } else {
        delete this.arr.firstName
      }
      if (this.lastName) {
        this.arr.lastName = this.lastName
      } else {
        delete this.arr.lastName
      }
      if (this.gender) {
        this.arr.gender = this.gender
      } else {
        delete this.arr.gender
      }
      if (this.birthday) {
        this.arr.birthday = this.birthday
      } else {
        delete this.arr.birthday
      }
      if (this.intention) {
        this.arr.intention = this.intention
      } else {
        delete this.arr.intention
      }
      this[UPDATE_USER](this.arr)
      location.reload()
    },
    ...mapActions([UPDATE_USER])
  }
}
