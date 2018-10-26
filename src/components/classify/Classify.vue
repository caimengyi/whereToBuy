<template>
	<div class="classify" style="height: 100%">
     <Header></Header> 
     <div v-bind:class="isSelected ? 'selectgoods': 'goodsshops'">
       <ul class="lists" v-on:click="choose">
         <li class="classSelected">商品</li>
         <li>店铺</li>
       </ul>

       <ul class="goodslist"  v-on:click="showdetail">
         <li v-for="(item,index) in goodsList"><img :src="item.imgSrc" :class="item.className"/><span>{{item.title}}</span></li>
       </ul>

       <div v-bind:class="isSelected ? 'goodsdetail': 'hiddendetail'">
          <div v-for="(item,index) in goodsDetail" class="goodsclasses">
            <p class="title">{{item.title}}</p>
            <ul>
              <li v-for="(ditem,dindex) in item.type"><img :src="ditem.src"/><span>{{ditem.text}}</span></li>
            </ul>

          </div>
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
      isSelected:false,
      goodorshop:'goodsClassify',
      listType:'goodslist',
      listTitle:'goods',
      goodsList:'',
      goodsDetail:''
    }
    return data      
  },
  mounted(){
    this.loadData('../../static/data/classify/goodsClassify/goodslist.json');       
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
    },
    loadDetail(url){
      let self = this;
      this.baseAjax({
        url:url,
        success:function(data){
          console.log(data)
          self.goodsDetail = data.returnObject
        }
      })
    },
    showdetail(ev){
      let self = this;
      self.isSelected = true;
      var ev = ev || window.event;
　　　 var target = ev.target || ev.srcElement; 
      var index =0;

      if(target.parentNode.nodeName.toLowerCase() == 'ul'){
        var ul = target.parentNode;
      }else{
        var ul = target.parentNode.parentNode;
        target = target.parentNode;
      }
      var lis = ul.getElementsByTagName('li');
      for(var i=0;i<lis.length;i++){
        if(lis[i].getAttribute('class') == 'selected'){
          lis[i].setAttribute('class','');
        }
        if(lis[i] == target){
          index = i;
        }
      }

      target.setAttribute('class','selected');
      var url = '../../static/data/classify/' + this.goodorshop +'/' + this.listTitle + index +'.json';
      this.loadDetail(url);
      

    },
    choose(ev){
      let self = this;
      self.isSelected = false;
      var ev = ev || window.event;
　　　 var target = ev.target || ev.srcElement; 
      var ul = target.parentNode;
      var lis = ul.getElementsByTagName('li');
      for(var i=0;i<lis.length;i++){
        if(lis[i].getAttribute('class') == 'classSelected'){
          lis[i].setAttribute('class','');
        }
      }
      target.setAttribute('class','classSelected');
      if(target.innerHTML=='商品'){
        this.goodorshop = "goodsClassify";
        this.listType = "goodslist";
        this.listTitle  = "goods";
      }else if(target.innerHTML=='店铺'){
        this.goodorshop = "shopsClassify";
        this.listType = "shopslist";
        this.listTitle  = "shops";
      }
      var url = '../../static/data/classify/' + this.goodorshop + '/' + this.listType +'.json';
      this.loadData(url);
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

body ul {
  margin:0;
  padding:0;
}

.classify{
  width:100%;
  position:relative;
  display:-webkit-box; 
  -webkit-box-orient: vertical; 
  display:flex; 
  flex-flow: column;
}

.goodsshops{
  width:100%;
  margin-top:1rem;
  display:-webkit-box; 
  -webkit-box-orient: horizontal; 
  display:flex; 
  flex-flow: row; 
}

.goodsshops ul li{
  list-style:none;
  cursor:pointer;
}

.goodsshops .lists{
  padding:0;
  text-align:center;
  flex-basis:40%;
  height:100%;
}

.goodsshops .lists li{
  font-size:1.5rem;
  color:#606c70;
  border:0.05rem solid #E6E6E6;
  height:5rem;
  line-height:5rem;
  border-bottom:none;
  border-right:none;
}

.goodsshops .lists li:last-child{
  border-bottom:0.05rem solid #E6E6E6;
}

.goodsshops .goodslist{
  flex-basis:60%;
  padding:0;
}

.goodsshops .goodslist li{
  font-size:1.3rem;
  border:0.05rem solid #E6E6E6;
  border-bottom:none;
  height:5rem;
  line-height:5rem;
  padding-left:2rem;
  cursor:pointer;
}

.goodsshops .goodslist li:last-child{
  border-bottom:0.05rem solid #E6E6E6;
}

.goodsshops .goodslist .goodsphoto{
  position:relative;
  width:2.5rem;
  height:2.5rem;
  margin-right:2rem;
  top:20%;
  padding:0.5rem;
  border-radius:0.7rem;
}



.goodsshops .goodslist .goodsphoto1,.goodsshops .goodslist .goodsphoto5{
    background:#dd7777;
}

.goodsshops .goodslist .goodsphoto2,.goodsshops .goodslist .goodsphoto6{
    background:#f07810;
}

.goodsshops .goodslist .goodsphoto3,.goodsshops .goodslist .goodsphoto7{
    background:#6B78B4;
}

.goodsshops .goodslist .goodsphoto4,.goodsshops .goodslist .goodsphoto8{
    background:#39BAE8;
}



.selectgoods{
  width:100%;
  margin-top:1rem;
  display:-webkit-box; 
  -webkit-box-orient: horizontal; 
  display:flex; 
  flex-flow: row; 
  width: 100%;
}

.selectgoods ul li{
  list-style:none;
}

.selectgoods .lists{
  text-align:center;
  flex-basis:20%;
  height:100%;
}


.selectgoods .lists li{
  font-size:1.5rem;
  color:#606c70;
  border:0.05rem solid #dddfe6;
  height:4rem;
  line-height:4rem;
  border-bottom:none;
  border-right:none;
}

.selectgoods .lists li:last-child{
  border-bottom:0.05rem solid #dddfe6;
}

.selectgoods .goodslist{
  flex-basis:25%;
  text-align:center;
  height:100%;
}

.selectgoods .goodslist li{
  font-size:1.1rem;
  border:0.05rem solid #dddfe6;
  border-bottom:none;
  height:3.5rem;
  line-height:3.5rem;
}
.selectgoods .goodslist li:last-child{
  border-bottom:0.05rem solid #ccc;
}

.selectgoods .goodslist .goodsphoto{
  position:relative;
  width:1.5rem;
  height:1.5rem;
  margin-right:0.5rem;
  top:20%;
  padding:0.5rem;
  border-radius:0.7rem;
}

.selectgoods .goodslist .goodsphoto1,.selectgoods .goodslist .goodsphoto5{
    background:#dd7777;
}

.selectgoods .goodslist .goodsphoto2,.selectgoods .goodslist .goodsphoto6{
    background:#f07810;
}

.selectgoods .goodslist .goodsphoto3,.selectgoods .goodslist .goodsphoto7{
    background:#6B78B4;
}

.selectgoods .goodslist .goodsphoto4,.selectgoods .goodslist .goodsphoto8{
    background:#39BAE8;
}


.selectgoods .goodslist .selected{
  height:8rem;
  text-align:center;
  padding:0;
  position:relative;
  line-height:2rem;
}
.selectgoods .goodslist .selected span{
  font-size:1.5rem;
  display:block;
  color:orange;
}

.selectgoods .goodslist .selected img{
  width:3.2rem;
  height:3.2rem;
  margin-top:1rem;
}


.selectgoods .goodsdetail{
  flex-basis:55%;
}

.selectgoods .goodsdetail .goodsclasses{
  margin-bottom:2rem;
}

.selectgoods .goodsdetail .goodsclasses .title{
  height:3rem;
  color:#bbb;
  font-size:1.3rem;
  margin-left:2rem;
  width:100%;
  margin:0;
  line-height:3rem;
  margin-left:2rem;  
}

.selectgoods .goodsdetail .goodsclasses ul{
  display:-webkit-box; 
  -webkit-box-orient: horizontal; 
  display:flex; 
  flex-flow: row wrap;
}


.selectgoods .goodsdetail .goodsclasses ul li{
  text-align:center;
  flex-basis:33%;
  margin-bottom:1rem;
}

.selectgoods .goodsdetail .goodsclasses ul li span{
  display:block;
  font-size:1.2rem;
}

.selectgoods .goodsdetail .goodsclasses ul li img{
  width:100%;
  height:6rem;
}

.goodsshops .hiddendetail{
  display:none;
}

.hidden{
  display:none;
}

.selectgoods .lists .classSelected{
  color:orange;
}

.goodsshops .lists .classSelected{
  color:orange;
}





</style>