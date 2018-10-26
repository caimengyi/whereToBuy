import Vue from 'vue'
import Router from 'vue-router'
import HelloFromVux from '@/components/HelloFromVux'
import MainPage from '@/components/mainPage/MainPage'
import Classify from '@/components/classify/Classify'
import Search from '@/components/search/Search'
import Mine from '@/components/mine/Mine'

Vue.use(Router)

export default new Router({
	mode: 'hash',
	routes: [
		{ path: '/', redirect: '/HelloFromVux/MainPage' },
        { path: '*', redirect: '/HelloFromVux/MainPage' },
	    {
	      	path: '/HelloFromVux',
	      	name: 'main',
	      	component: HelloFromVux,
	      	children:[
	      		{
	      			path:'/HelloFromVux/MainPage',
	      			name:'MainPage',
	      			component: MainPage
	      		},
	      		{
	      			path:'/HelloFromVux/Classify',
	      			name:'Classify',
	      			component: Classify
	      		},
	      		{
	      			path:'/HelloFromVux/Search',
	      			name:'Search',
	      			component: Search
	      		},
	      		{
	      			path:'/HelloFromVux/Mine',
	      			name:'Mine',
	      			component: Mine
	      		}
	      	]

	    }
	]
})
