<template>
  <div>
    <div id="app">
    <Header id="header"></Header>
    <main id="main">
      <router-view/>
    </main>
    <Footer id="footer"></Footer>
  </div>
  </div>
</template>

<script>
import Header from "@/components/header"
import Footer from "@/components/footer"

export default {
  name: "App",
  components: {
    Header: Header,
    Footer: Footer
  },
}


</script>

<style lang="less" >

@import './assets/common.less';


#app {
  display: grid;
  grid-template-columns: 12% auto 12%;
  grid-template-rows: auto  1fr  auto;
  grid-template-areas:'header header  header '
                        '.  main  .'
                         'footer footer footer';
  background: #f3f3f3;
 #header{
   grid-area: header;
   padding-left: 12%;
   padding-right: 12%;
 }

  #main{
    grid-area: main;
    background: #ffffff;
    border-radius: 5px;
    padding: 15px;
    min-height: 600px;
  }

  #footer{
    grid-area: footer;
    padding-left: 12%;
    padding-right: 12%;
  }

}

@media (max-width: 768px) {
  #app{
    grid-template-columns: 10px auto 10px;

    #header,#footer{
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}
</style>
