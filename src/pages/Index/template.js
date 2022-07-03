import blog from "@/api/blog"

export default {
  data() {
    return {
      blogs: [],
      total: 0,
      pager: 1,
    }
  },
  created() {
    this.page = parseInt(this.$route.query.page) ||1
    blog.getIndexBlogs({page:this.page}).then(res => {
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
      this.totalPage  = (res.totalPage)*10
    })
  },

  methods: {
    onPageChange(newPage){
      blog.getIndexBlogs({page:newPage}).then(res => {
        this.blogs = res.data
        this.total = res.total
        console.log(this.total)
        // this.page  = res.page
        this.page  = res.totalPage
        this.$router.push({path:'/',query:{page:newPage}})
      })
    }
  }
}

