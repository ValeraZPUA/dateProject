
export default {
  name: 'UserItem',
  props: {
    current: Object
  },
  methods: {
    getProfileUrl () {
      if (this.current.profilePicture) {
        return { 'background-image': `url('${this.current.profilePicture}')` }
      } else {
        return { 'background-image': `url('https://static.thenounproject.com/png/994628-200.png')`}
      }
    }
  }
}

