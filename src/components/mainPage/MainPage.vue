<template>
  <div class="MainPage" style="height: 100%">
      <Header></Header>

      <div class="adver">
        <img class="adverimg" src="../../assets/images/mainPage/adver.png"/>
        <div class="recommandation">
          <div class="goodstext">
            <h3>商品通缉</h3>
            <p>好货我等你很久了</p>
          </div>
          <img class="findgoods" src = "../../assets/images/mainPage/findgoods.png"/>
          <img class="recomd" src = "../../assets/images/mainPage/recommand.png"/>
          <h3 class="recommandtext">商品推荐</h3>
          <h3 class="storetext">良心好店</h3>
          <img  class="goodstore" src = "../../assets/images/mainPage/goodstore.png"/>
        </div>
                     
      </div>

      <div class = "showLikes">
        <div class="likeTitle"> <p>猜你喜欢</p></div>
        <div class="goodsList">
           <ul>
             <li class="goods" v-for="(item,index) in goodsList">
               <img :src="item.imgSrc"/>
               <div class= "goodsDetail">
                 <p class="goodsTitle">{{item.goodsTitle}}</p>
                 <p class="price">{{item.price}}</p>
                 <p class="discount">{{item.discount}}</p>
                 <p class="shops">{{item.shops}}</p>
               </div>          
             </li>
           </ul>
             
       </div>
     </div>

    
  </div>
</template>

<script>

 import Header from '../header/Header'
  export default {
    data(){
    let self= this;
    let data={
      goodsList:''
    }
      return data;      
    },
    mounted(){
      this.loadData('../../static/data/recommend/recommend.json');       
    },
    methods:{
      loadData(url){
          let self = this;
          this.baseAjax({
            url:url,
            success:function(data){          
                self.goodsList = data.returnObject
            }
          })
      }
    },
  
    directives: {
        
      },
    components: {
      Header
    }
  }
</script>
<style>


.mainPage{
  width:100%;
  position:relative;
  padding:0;
  margin:0;
}


.adver{
  width:100%;
  position:absolute;
  height:32rem;
  top:0;
  left:0;
}

.adver .adverimg{
  width:100%;
  height:16rem;
}

.recommandation .goodstext{
  width:50%;
  height:6rem;
  position:absolute;
  left:0;
  top:16rem;
  margin-left:1rem;
  line-height:2rem;


}

.recommandation .goodstext h3{
  color:#525564;
  font-size:1.5rem;
  padding:0;
  margin:0;
}

.recommandation .goodstext p{
  color:#a39e9e;
  margin:0.35rem 0 0 0;
}

.recommandation .findgoods{
  width:50%;  
  position:absolute;
  height:10rem;
  left:0;
  top:22rem;
}

.recommandation .recomd{
  width:30%;  
  position:absolute;
  height:8rem;
  left:50%;
  top:16rem;
}

.recommandation .recommandtext{
  width:20%;  
  position:absolute;
  height:8rem;
  right:0;
  top:16rem;
  font-size:1.5rem;
  text-align:center;
  color:#525564;
  margin:0;
  line-height:8rem;
}

.recommandation .goodstore{
  width:30%;  
  position:absolute;
  height:8rem;
  right:0;
  top:24rem;
}


.recommandation .storetext{
  width:20%;  
  position:absolute;
  height:8rem;
  left:50%;
  top:24rem;
  font-size:1.5rem;
  text-align:center;
  color:#525564;
  margin:0;
  line-height:8rem;

}

.showLikes{
  position:absolute;
  top:32rem;
  left:0;
  width:100%;
}

.showLikes .likeTitle{
  width:100%;
  height:3rem;
  background-color:#E6E6E6;
  position:relative;
  line-height:3rem;
  color:#a2a9af;
}

.likeTitle p{
  position:absolute;
  bottom:-0.6rem;
  left:0.75rem;
}

.goodsList{
  position:relative;
  width:100%;
}

.goodsList ul li{
  list-style:none; 
}

.goodsList ul{
  margin:0;
  padding:0;
}

.goods{
  position:relative;
}

.goods img{
  width:40%;
  height:10rem;
}


.goodsDetail{
  position:absolute;
  width:60%;
  height:10rem;
  right:0;
  top:0;
  margin-bottom:5rem;
}

.goodsDetail .goodsTitle{
  position:absolute;
  font-size:1rem;
  top:0.25rem;
  left:1.25rem;
}

.goodsDetail .price{
  position:absolute;
  font-size:1.2rem;
  color:red;
  left:1.25rem;
  top:3rem;
}

.goodsDetail .discount{
  position:absolute;
  bottom:0.5rem;
  left:1.25rem;
  font-size:0.8rem;
  color:#ccc;
}

.goodsDetail .shops{
  position:absolute;
  right:1rem;
  bottom:0.5rem;
  font-size:0.8rem;
  color:#ccc;
}



</style>