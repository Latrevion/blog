import blog from '@/api/blog'
import { mapGetters } from 'vuex'
import Loading from "@/components/Loading"

export default {
  components:{Loading},
  data () {
    return {
      blogs: [],
      page: 1,
      total: 0,
      value:true,
      hide:false
    }
  },

  computed: {
    ...mapGetters(['user'])
  },

  beforeMount() {
    this.hide =true
    this.page = parseInt(this.$route.query.page) || 1
    blog.getBlogsByUserId(this.user.id, { page: this.page })
      .then(res => {
        console.log(res)
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
      })
    setTimeout(()=>{
      this.hide =false
    },800)
  },

  methods: {
    onPageChange(newPage) {
      blog.getBlogsByUserId(this.user.id, { page: newPage }).then(res => {
        console.log(res)
        this.blogs = res.data
        this.total = res.total
        this.page = res.page
        this.$router.push({ path: "/my", query: { page: newPage}})
      })
    },

    async onDelete(blogId) {
      await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      await blog.deleteBlog({ blogId })
      this.$message.success('删除成功')
      this.blogs = this.blogs.filter(blog => blog.id != blogId)
    },

    splitDate(dataStr) {
      let dateObj = typeof dataStr === 'object' ? dataStr : new Date(dataStr)
      return {
        date: dateObj.getDate(),
        month: dateObj.getMonth() + 1,
        year: dateObj.getFullYear()
      }
    }
  }
}
