import TextInput from '@/components/TextInput/TextInput.vue'
import Button from '@/components/Button/Button.vue'

export default {
  name: 'Login',
  components: {
    TextInput,
    Button
  },
  data: function () {
    return {
      email: '',
      password: '',
      showModal: false
    }
  },
  methods: {
    changeMethod: function (fieldValue, fieldName) {
      this[fieldName] = fieldValue
      console.log(this.password, this.email)
    },
    onLoginClicked() {
      console.log('Clicked')
    }
  }
}
