webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Vue = __webpack_require__(1);
	var VueTouch = __webpack_require__(3);
	var VueResource = __webpack_require__(6);
	//var VueRouter = require('vue-router');

	//Vue.use(VueRouter);
	Vue.use(VueTouch);
	Vue.use(VueResource);


	var app = new Vue({
		el: 'body',
		ready: function(){
			var _this = this;
			setInterval(_this.switchInit,2000)
	        
	        this.$http({url: '../src/lib/index.json', method: 'GET'}).then(function(response) {
	        	// success callback

	        	_this.headerData = response.data;

	    	}, function(response){
	        	// error callback
	        	console.log(response)
	    	});
	    	
	    	
	        this.$http({url: '../src/lib/product.json', method: 'GET'}).then(function(response) {
	        	// success callback

	        	_this.projectData = response.data;

	    	}, function(response){
	        	// error callback
	    	});
	    	
	    	
		},
		data: {
			headerData : [],
			projectData : '',
			addmore: true,
			login: true
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
			},
			jumpTo: function(){
				// alert(1);
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
		var dpr = document.documentElement.getAttribute('data-dpr');
		// console.log(dpr,value);
		var length = value.length;
		// var dot = dpr == 1 ? 88 : dpr == 2 ? 137 
		// if( dpr == 1 ){
			if(length > 80 ){
				value = value.substring(0,80)+'......';
			}
		// } 
		
		return value;
	})

	Vue.filter('state',function(value){
		if(value == 1){
			return '预 热 中';
		} else if(value == 2) {
			return '融 资 中';
		} else if(value == 3){
			return '成  功';
		}
	})


/***/ }
]);