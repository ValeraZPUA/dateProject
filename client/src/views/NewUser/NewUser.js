import {mapState, mapActions} from 'vuex'
import {NEW_USER} from '../../../constants'
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';

export default {
  name: 'NewUser',
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
      data: {},
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
        this.data.email = this.email
        this.$refs.email.value = ''
      } else {
        delete this.data.email
      }
      if (this.password) {
        this.data.password = this.password
        this.$refs.password.value = ''
      } else {
        delete this.data.password
      }
      if (this.firstName) {
        this.data.firstName = this.firstName
        this.$refs.firstName.value = ''
      } else {
        delete this.data.firstName
      }
      if (this.lastName) {
        this.data.lastName = this.lastName
        this.$refs.lastName.value =''
      } else {
        delete this.data.lastName
      }
      if (this.gender) {
        this.data.gender = this.gender
        this.$refs.gender.value = ''
      } else {
        delete this.data.gender
      }
      if (this.birthday) {
        this.data.birthday = this.birthday
      } else {
        delete this.data.birthday
      }
      if (this.intention) {
        this.data.intention = this.intention
        this.$refs.intention.value = ''
      } else {
        delete this.data.intention
      }
      this[NEW_USER](this.data)

    },
    ...mapActions([NEW_USER])
  }
}
