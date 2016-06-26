<template>
	<header>
        <div class="head-main">
        	<a href="./index.html" class="logo"><img id="logo" src="./images/logo.png" alt="中现众合"/></a>
        </div>
        <div class="head-right"><a id="plus" class="head" href="javaScript:void(0)"><img src="./images/list.png"/></a></div>
        <div class="head-left"><a class="head rig" target="_self" href="#"><img src="./images/self.png" /></a></div>
	</header>
</template>

<style type="text/less" scoped>
	@import '../less/component/sty';
	
	header {
		position: fixed;
		z-index: 99;
		width: 100%;
		padding: 10px 0;
		background-color: @color;
		>div {
	      float: left;
	    }

	    .head-main {
	      width: 100%;
	      text-align: center;
	      img {
	          transform: translateY(4/@width);
	          -webkit-transform: translateY(4/@width);
	          -o-transform: translateY(4/@width);
	          -ms-transform: translateY(4/@width);
	        }
	    }
	    .head {
	      display: block;
	      text-align: center;
	      img {
	          padding-top: 32/@width;
	          width: 45%;
	        }
	    }
	    .head-left {
	      margin-left: -97%;
	      width: 0.9rem;
	      text-align: right;
	      img {
	          padding-top: 25/@width;
	        }
	    }
	    .head-right {
	      width: 1.2rem;
	      margin-left: -13%;
	    }
	    #logo {
	      width: 1rem;
	    }
	}
</style>
