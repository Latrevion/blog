import marked from 'marked'
import blog from '@/api/blog'
import Loading from "@/components/Loading"

export default  {
  components:{Loading},
  data(){
    return {
      title:'',
      rawContent:'',
      user:{},
      createdAt:'',
      hide:false
    }
  },
  // created() {
  //   this.blogId = this.$route.params.blogId
  //   blog.getDetail({blogId:this.blogId})
  //     .then(res =>{
  //       console.log(res)
  //       this.title = res.data.title
  //       this.rawContent = res.data.content
  //       this.createdAt = res.data.createdAt
  //       this.user = res.data.user
  //     })
  // },
  beforeMount(){
    this.hide= true
    this.blogId = this.$route.params.blogId
      blog.getDetail({blogId:this.blogId})
        .then(res =>{
          console.log(res)
          this.title = res.data.title
          this.rawContent = res.data.content
          this.createdAt = res.data.createdAt
          this.user = res.data.user
        })
      setTimeout(()=>{
        this.hide =false
      },800)
    },

  computed:{
    markdown(){
      return marked(this.rawContent)
    }
  }
}
