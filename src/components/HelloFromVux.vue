<template>
  <div class="main" style="height: 100%">
    <view-box ref="viewbox" body-padding-top="46px">
     
          <router-view></router-view>
          <tabbar style="position:fixed">
            <tabbar-item selected link="/HelloFromVux/MainPage">
              <img slot="icon" src="../assets/images/icon/mainpage_icon.png"/>
              <span slot="label">主页</span>
            </tabbar-item>
            <tabbar-item link="/HelloFromVux/Classify">
              <img slot="icon" src="../assets/images/icon/classify_icon.png"/>
              <span slot="label">分类</span>
            </tabbar-item>
            <tabbar-item  link="/HelloFromVux/Search">
              <img slot="icon" src="../assets/images/icon/search_icon.png"/>
              <span slot="label">发现</span>
            </tabbar-item>
            <tabbar-item link="/HelloFromVux/Mine">
              <img  slot="icon" src="../assets/images/icon/mine_icon.png"/>
              <span slot="label">我的</span>
            </tabbar-item>
        </tabbar>
    </view-box>
    
  </div>
</template>

<script>
  import { Tabbar,Icon,TabbarItem ,XHeader,Loading,ViewBox} from 'vux'
  import { TransferDomDirective as TransferDom } from 'vux'

  import {mapGetters} from 'vuex'
  import Header from './header/Header'
 
  export default {


    directives: {
        TransferDom
      },
    components: {
      Tabbar,
      TabbarItem,
      XHeader,
      Loading,
      ViewBox,
      Icon,
      Header
    }
  }
</script>

<style>
body{
  margin:0;
}


@media only screen and (max-width: 462px) {
  html {
    font-size:65%!important
  }
}

@media only screen and (min-width: 462px) {
  html {
    font-size:75%!important
  }
}

@media only screen and (min-width: 561px) {
  html {
    font-size:100%!important
  }
}

@media only screen and (min-width: 641px) {
  html {
    font-size:120%!important
  }
}





</style>
