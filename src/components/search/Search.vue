<template>
	<div class="search" style="height:100%">
    <Header></Header>
		  <div class="hot"><img src="../../assets/images/search/hot.png"/></div>
      <div class="discount"><img src="../../assets/images/search/discount.png"/></div>
      <div class="teambuy">
        <div class="post"><img src="../../assets/images/search/post.png"/></div>
        <div class="get"><img src="../../assets/images/search/get.png"/></div>
      </div>
	</div>
</template>

<script>

 import Header from '../header/Header'
 
  export default {

    directives: {
        
      },
    components: {
      Header
    }
  }
</script>
<style>

.search{
  width:100%;
  position:absolute;
  top:0;
  left:0;
  display:-webkit-box; 
  -webkit-box-orient: vertical; 
  display:flex; 
  flex-flow: column; 
  padding:4rem 1rem 0 1rem;
  box-sizing:border-box;
}

.hot,.discount{
  width:100%;
  height:11rem;
  margin-bottom:0.8rem;
}

.hot img,.discount img{
  width:100%;
  height:11rem;
  border-radius:2rem;
  cursor:pointer;
}

.teambuy{
  display:-webkit-box; 
  -webkit-box-orient: horizontal; 
  display:flex; 
  flex-flow: row; 
}

.teambuy .post,.teambuy .get{
  width:50%;
  height:11rem;
}

.teambuy .post{
  margin-right:0.2rem;  
  margin-left:1.3rem;
}

.teambuy .get{
  margin-left:0.2rem; 
  margin-right:1.3rem;

}

.teambuy img{
  width:100%;
  border-radius:2rem;
  height:11rem;
  cursor:pointer;
}
</style>