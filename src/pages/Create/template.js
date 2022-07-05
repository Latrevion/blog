import blog from '@/api/blog'
import Loading from "@/components/Loading"

export default  {
    components:{Loading},
    data(){
      return {
        title:'',
        description:'',
        content:'',
        atIndex:'',
        hide:false,
      }
    },
  beforeMount() {
      this.hide=true
      setTimeout(()=>{
      this.hide =false
    },800)
  },


  methods:{
      onCreate(){
        blog.createBlog({title:this.title,content:this.content,description:this.description,atIndex:this.atIndex})
          .then(res =>{
            this.$message.success(res.msg)
            this.$router.push({path:`/detail/${res.data.id}`})
          })
      }
  }
}
