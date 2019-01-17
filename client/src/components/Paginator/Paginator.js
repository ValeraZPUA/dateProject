import UserItem from '../../components/UserItem/UserItem.vue'

export default {
  name: 'Paginator',
  components: {
    UserItem
  },
  data() {
    return {
      pageNumber: 0
    }
  },
  props: {
    listData: {
      type: Array,
      required: true
    },
    size: {
      type: Number,
      required: false,
      default: 3
    }
  },
  methods: {
    nextPage() {
      this.pageNumber++
    },
    prevPage() {
      this.pageNumber--
    }
  },
  computed: {
    pageCount() {
      let l = this.listData.length
      let s = this.size
      if (l % s == 0) {
        return Math.floor(l / s)
      } else {
        return Math.floor(l / s + 1)
      }
    },
    paginatedData() {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.listData
        .slice(start, end)
    }
  }
}
