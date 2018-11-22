<template>
  <div class="header">
      <form class="city">
        <select name="cities">
          <option value="guangzhou">广州</option>
          <option value="shenzhen">深圳</option>
          <option value="hefei">合肥</option>
          <option value="beijing">北京</option>
          <option value="foshan">佛山</option>
          <option value="chengdu">成都</option>
          <option value="changsha">长沙</option>
          <option value="shanghai">上海</option>
        </select>
      </form>

      <div class='searchsth'>
        <input placeholder = '搜索本地商品/店铺'/>
        <img class='find_icon' src="../../assets/images/icon/find_icon.png"/>
        <img class='voice_icon' src="../../assets/images/icon/voice_icon.png"/>
     </div>

      <div class="imgshow">
        <a href="https://uri.amap.com/marker?position=经度,纬度&name=所在的位置名称">
          <img class="map_icon" src="../../assets/images/icon/map_icon.png"/>
        </a>
        <img class="scan_icon" src="../../assets/images/icon/scan_icon.png"/>
      </div>

  </div>

</template>


<script>
 
  export default {
  	data: {

  	},

    method: {

    }

  }
</script>

<style>

.header{
   width:100%;
   z-index:100;
   position:fixed;
   top:0;
   left:0;
   height:3.125rem;
   line-height:3.125rem;
   background-color:#fff;
   display: -webkit-flex; 
   display:flex;
   min-width:28.8rem;
}

.city{
  width:4.125rem;
}

.city select{
  padding:0.3rem 0.2rem 0.3rem 0.2rem;  
  font-size:0.8rem;
}

.searchsth{
  flex:1;
}

.searchsth input{
  padding:0.625rem 0 0.625rem 0rem;
  width:100%;
  text-indent:2.5rem;
  font-size:0.85rem;
}

.find_icon,.voice_icon{
  position:absolute;  
  z-index:110;
  width:1.5625rem;
  height:1.5625rem;
}

 
.find_icon{
  left:4.5rem;
  top:0.9375rem;
} 

.voice_icon{
  top:0.9375rem;
  right:5.4rem;
}

.imgshow{
  width:5.2rem;
  right:0.3125rem;
  padding:0;
  margin:0;
}

.map_icon,.scan_icon{
  position:absolute;
  right:0;
  top:0.625rem;
  width:1.875rem;
  height:1.875rem;
  margin:0 0.1875rem;  
}
.map_icon{
  right:2.5rem;
}


</style>
