import {mapState, mapActions} from 'vuex'
import {UPDATE_USER} from '../../../constants'

export default {
  name: 'UpdateUser',
  components: {},
  data() {
    return {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      gender: '',
      birthday: '',
      intention: '',
      allData: [],
      // toSend: [{email: this.email, password: this.password,
      //                     firstName: this.firstName, lastName: this.lastName,
      //                     gender: this.gender, birthday: this.birthday,
      //                     intention: this.intention}]
      toSend: [{email: '0'}, {password: '0'},
        {firstName: '0'}, {lastName: '0'},
        {gender: '0'}, {birthday: '0'},
        {intention: '0'}]
    }
  },
  created() {
    //this[UPDATE_USER]()
  },
  computed: {
    ...mapState({
      users: state => state.userMod.users,
      isFetching: state => state.userMod.isFetching,
      error: state => state.userMod.error
    })
  },
  methods: {
    handle() {

      // this.toSend[0].email = this.$refs.email.value
      // this.toSend[1].password = this.$refs.password.value
      // this.toSend[2].firstName = this.$refs.firstName.value
      // this.toSend[3].lastName = this.$refs.lastName.value
      // this.toSend[4].gender = this.$refs.gender.value
      // this.toSend[5].birthday = this.$refs.birthday.value
      // this.toSend[6].intention = this.$refs.intention.value

      // this.email = this.$refs.email.value
      // this.password = this.$refs.password.value
      this.firstName = this.$refs.firstName.value
      // this.lastName = this.$refs.lastName.value
      // this.gender = this.$refs.gender.value
      // this.birthday = this.$refs.birthday.value
      // this.intention = this.$refs.intention.value

      this.allData.push({firstName: this.firstName})

      // if (this.$refs.email.value) {
      //   console.log(this.$refs.email.value)
      //   this.toSend.push(this.$refs.email.value)
      // }
      //
      //  if (this.$refs.password.value)
      //  this.toSend.push({password: this.$refs.password.value})
      // if (this.$refs.firstName.value)
      // this.toSend.push({firstName: this.$refs.firstName.value})
      // if (this.$refs.lastName.value)
      // this.toSend.push({lastName: this.$refs.lastName.value})
      // if (this.$refs.gender.value)
      // this.toSend.push({gender: this.$refs.gender.value})
      // if (this.$refs.birthday.value)
      // this.toSend.push({birthday: this.$refs.birthday.value})
      // if (this.$refs.intention.value)
      // this.toSend.push({intention: this.$refs.intention.value})
    },
    submit() {
      console.log(this.allData)
      //this[UPDATE_USER](this.allData)


      // if (this.$refs.email.value)
      // this.allData.push({email: this.$refs.email.value})
      // if (this.$refs.password.value)
      // this.allData.push({password: this.$refs.password.value})
      // if (this.$refs.firstName.value)
      // this.allData.push({firstName: this.$refs.firstName.value})
      // if (this.$refs.lastName.value)
      // this.allData.push({lastName: this.$refs.lastName.value})
      // if (this.$refs.gender.value)
      // this.allData.push({gender: this.$refs.gender.value})
      // if (this.$refs.birthday.value)
      // this.allData.push({birthday: this.$refs.birthday.value})
      // if (this.$refs.intention.value)
      // this.allData.push({intention: this.$refs.intention.value})
      //
      // console.log(this.allData)
      // console.log(this.allData[0].key)

      // for (var i = 0; i < this.allData.length; i++)
      // {
      //   if (this.allData[i] == null) {
      //     console.log('HERE')
      //     // this.toSend.push(this.allData[i]);
      //     // console.log(this.allData[i])
      //   }
      // }
      //console.log(this.toSend)
      // this[UPDATE_USER]({email: this.email, password: this.password,
      //                   firstName: this.firstName, lastName: this.lastName,
      //                   /*gender: this.gender,*/ birthday: this.birthday,
      //                   /*intention: this.intention*/})
      //this[UPDATE_USER]({firstName: this.firstName})
    },
    ...mapActions([UPDATE_USER])
  }
}


// import {mapState, mapActions} from 'vuex'
// import {UPDATE_USER} from '../../../constants'
//
// export default {
//   name: 'UpdateUser',
//   components: {},
//
//   created() {
//     this[UPDATE_USER]({
//       isBanned: true
//     })
//   },
//   computed: {
//     ...mapState({
//       users: state => state.userMod.users,
//       isFetching: state => state.userMod.isFetching,
//       error: state => state.userMod.error
//     })
//   },
//   methods: {
//     ...mapActions([UPDATE_USER])
//   }
// }
