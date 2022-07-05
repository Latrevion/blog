import blog from "@/api/blog"
import Loading from "@/components/Loading"
import fa from "element-ui/src/locale/lang/fa"
export default {
  components:{Loading},
  data() {
    return {
      blogs: [],
      user: {},
      page: 1,
      total: 0,
      hide:false
    }
  },
  beforeMount() {
    this.hide=true
    this.userId = this.$route.params.userId
    this.page =this.$route.query.page || 1
    blog.getBlogsByUserId(this.userId, {page: this.page}).then(res => {
        this.page = res.page
        this.total = res.total
        this.blogs = res.data
        if (res.data.length > 0) {
          this.user = res.data[0].user
        }
      }
    )
    setTimeout(()=>{
      this.hide =false
    },800)
  },
  methods:{
    onPageChange(newPage){
        blog.getBlogsByUserId(this.userId,{page:newPage}).then(res => {
          this.blogs = res.data
          this.total = res.total
          this.page  = res.page
          this.$router.push({path:'/user/${this.userId}',query:{page:newPage}})
        })
    },
    splitDate(dataStr){
      let dateObj = typeof dataStr === 'objdect'?dataStr :new Date(dataStr)
      return {
        date:dateObj.getDate(),
        month:dateObj.getMonth()+1,
        year:dateObj.getFullYear()
      }
    }
  }
}
