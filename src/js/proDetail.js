var Vue = require('vue');
var VueTouch = require('vue-touch');
var VueResource = require('vue-resource');
//var VueRouter = require('vue-router');

//Vue.use(VueRouter);
Vue.use(VueTouch);
Vue.use(VueResource);


var app = new Vue({
	el: 'body',
	ready: function(){
		var _this = this;
		setInterval(_this.switchInit,2000)
        
    	
        this.$http({url: '../src/lib/product.json', method: 'GET'}).then(function(response) {
        	// success callback
        	console.log(response.data);
        	for(var i = 0; i<response.data.length; i++){
        		if(response.data[i].id == 1)
        		_this.projectData = response.data[i];
        	}
        	

    	}, function(response){
        	// error callback
    	});
    	
    	
	},
	data: {
		projectData : '',
		addmore: true
	},
	methods: {
		switchInit: function(){
//			console.log(this.headerData);
		},
		switchLeft: function(){
			alert(1);
		},
		switchRight: function(){
			alert(2);
		},
		swipeUps: function(){
			// alert(3);
			var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
			// console.log(1);

			
			// console.log(scrollTop());
			// console.log(window.scrollTop());
			console.log(document.querySelector('body').scrollTop);
		}
	},
//	http: {
//		root: '/lib',
//		headers: {
//			Authorization: 'Basic YXBpOnBhc3N3b3Jk'
//		}
//	}
	
})

Vue.filter('length',function(value){
	var length = value.length;
	if(length > 137 ){
		value = value.substring(0,137)+'......';
	}
	return value
})

