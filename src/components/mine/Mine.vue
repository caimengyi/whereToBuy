<template>
<div class="mine" style="height: 100%">
  <div class="head">
    <p class="headertitle">我的<a href="###" class="headerspan">签到</a></p>
  </div>
  
  <div class="myinfo">
    <img class="photo" src="../../assets/images/mine/photo.png"/>
    <div class="detail">
      <p class="name">WZZ</p>
      <p class="place">常住地：佛山</p>
    </div>
    
    <span class="right-arrow"></span>
  </div>
  
  <div class="mylike">
    <ul class="myul">
      <li class="pay"><p><img src="../../assets/images/mine/pay.png"/></p><p>我的悬赏</p></li>
      <li class="collection"><p><img src="../../assets/images/mine/collection.png"/></p><p>我的收藏</p></li>
      <li class="comment"><p><img src="../../assets/images/mine/comment.png"/></p><p>我的评价</p></li>
    </ul>
  </div>
  
  <div class="moredetail">
    <ul class="myul">
      <li class="history"><img src="../../assets/images/mine/history.png"/>历史记录<span class="right"></span></li>
      <li class="subscribe"><img src="../../assets/images/mine/subscribe.png"/>我的订阅<span class="right"></span></li>
      <li class="message"><img src="../../assets/images/mine/message.png"/>消息<span class="right"></span></li>
      <li class="more"><img src="../../assets/images/mine/more.png"/>更多<span class="right"></span></li>
    </ul>
  </div>
  
  
  
</div>
</template>

<script>

  export default {

    directives: {
        
      },
    components: {

    }
  }
</script>

<style>

a{
  text-decoration:none;
}

.mine{
  width:100%;
  position:absolute;
  top:0;
  display:-webkit-box; 
  -webkit-box-orient: vertical; 
  display:flex; 
  flex-flow: column;
  background-color:#DADDD8;  
}

.mine ul {
  width:100%;
  margin:0;
  padding:0;
}

.mine ul li{
  list-style:none;
}

.head{
  width:100%;
  height:4rem;
  line-height:4rem;
  border-bottom:solid 0.1rem #DADDD8;
  background-color:#fff;
  margin:0;
}

.head .headertitle{
  font-size:1.3rem; 
  margin-left:50%;
}

.head .headertitle .headerspan{
  float:right;
  margin-right:1rem;
  font-size:0.8rem; 
  color:#f07810;
}

.myinfo {
  position:absolute;
  top:4.1rem;
  padding:1rem 0 1rem 0;
  width:100%; 
  height:5rem;
  display:-webkit-box; 
  -webkit-box-orient: horizontal; 
  display:flex; 
  flex-flow: row;
  border-bottom:0.1rem solid #DADDD8;
  background-color:#fff;
  line-height:2.5rem;
}

.myinfo .photo{
  width:5rem;
  height:5rem;
  border-radius:50%; 
  margin-left:2rem;
}

.myinfo .detail{
  margin-left:1.5rem;
}

.right-arrow {  
  position:absolute; 
  right:1rem;
  height: 1rem;
  width: 1rem;
}

.right-arrow:after {
  content: " ";
  height: 1rem;
  width: 1rem;
  border-width: 0.2rem 0.2rem 0 0;
  border-color: #bac2c6;
  border-style: solid;
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: absolute;
  top: 2.3rem; 
}

.mylike{
  width:100%;
  position:absolute;
  background-color:#fff;
  top:11.2rem;
  
}


 .mylike ul li{
  float:left;
  width:33%;
  padding:0.5rem 0 0.5rem 0;
  text-align:center;
  border-left:0.1rem solid #DADDD8;
  border-bottom:0.1rem solid #DADDD8;
}
.mylike ul li img{
  width:2.5rem;
  height:2.5rem;
}

.mylike ul li:lastchild{
  border:none;
}

.mylike ul li p{
  margin:0;
  padding:0;
}

.moredetail{
  width:100%;
  position:absolute;
  top:16.5rem;
  margin-top:2rem;
  background-color:#DADDD8;  
}

.moredetail ul li{
  width:100%;
  padding:1rem 0 1rem 0rem;
  height:2.5rem;
  background-color:#fff; 
  border-top:0.1rem solid #DADDD8;
  line-height:1.5rem;
}

.moredetail ul li img{
  width:2rem;
  height:2rem;
  margin-right:1rem;
  margin-left:1rem;
}

.moredetail ul li:nth-child(3),.moredetail ul li:nth-child(4){
  margin-top:2rem;
  border-bottom:0.1rem solid #DADDD8;
}

.right {  
  position:absolute; 
  right:1rem;
  height: 1rem;
  width: 1rem;
}

.right:after {
  content: " ";
  height: 0.8rem;
  width: 0.8rem;
  border-width: 0.2rem 0.2rem 0 0;
  border-color: #bac2c6;
  border-style: solid;
  transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
  position: absolute;
  top: 1rem; 
}
</style>