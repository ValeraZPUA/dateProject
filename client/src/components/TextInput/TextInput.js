import {minLength, email} from 'vuelidate/lib/validators'

export default {
  name: 'TextInput',
  props: {
    fieldName: String,
    fieldTitle: String,
    fieldType: String,
    placeholder: String,
    fieldValue: String,
    fieldChange: Function
  },
  data() {
    return {
      field: this.fieldValue,
      isFieldValid: true,
      isHaveSpace: false
    }
  },
  validations: {
    field: {
      minLength: minLength(8),
      email
    }
  },
  methods: {
    check(value) {
      this.isFieldValid = !!value
      this.field = value
      this.$v.field.$touch()
      this.fieldChange(value, this.field)
      this.validate()
    },
    validate() {
      if (this.fieldType === 'password') {
        const space = ' '
        if (this.field.search(space) === -1) {
          this.isHaveSpace = false
        } else {
          this.isHaveSpace = true
        }
      }
    }
  }
}
