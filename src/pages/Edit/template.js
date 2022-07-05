import blog from '@/api/blog'
import Loading from "@/components/Loading"

export default {
  components:{Loading},
  data () {
    return {
      blogId: null,
      title: '',
      description: '',
      content: '',
      atIndex: false,
      hide:false
    }
  },

  beforeMount() {
    this.hide= true
    this.blogId = this.$route.params.blogId
    blog.getDetail({ blogId: this.blogId }).then(res => {
      this.title = res.data.title
      this.description = res.data.description
      this.content = res.data.content
      this.atIndex = res.data.atIndex
      setTimeout(()=>{
        this.hide =false
      },800)
    })
  },

  methods: {
    onEdit() {
      blog.updateBlog({ blogId: this.blogId }, { title: this.title, content: this.content, description: this.description, atIndex: this.atIndex})
        .then(res => {
          this.$message.success(res.msg)
          this.$router.push({ path: `/detail/${res.data.id}`})
        })
    }
  }
}
