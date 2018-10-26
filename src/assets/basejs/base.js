import Vue from 'Vue'
import {AjaxPlugin} from 'vux'
Vue.use(AjaxPlugin)

const baseAjax = function(param){
	let defaultParam={
		data: param.data || {},
		params: param.params || {},
		url:param.url,
		type:param.type || 'get',		

	}
	AjaxPlugin.$http.request({
		baseURL:defaultParam.baseURL,
		method:defaultParam.type,
		url:defaultParam.url,
		data:defaultParam.data,
		params:defaultParam.params,
		headers: defaultParam.headers
	}).then(function(response){
		param.success(response.data)
	}).catch(function(error){
		console.log(error)
	})
}

export default {
	baseAjax
}