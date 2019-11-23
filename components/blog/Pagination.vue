<template>
	<div class="blog-single__pagination">
       <a href="#" @click.prevent='prevPost'>
         <i class="fas fa-long-arrow-alt-left"></i>
       </a>
       <nuxt-link to='/blog'>
         <i class="fa fa-bars"></i>
       </nuxt-link>
       <a href="#" @click.prevent='nextPost'>
         <i class="fas fa-long-arrow-alt-right"></i>
       </a>
   </div> 
</template>
<script>
	export default {
		name: 'pagination',
		props: ['prevPost', 'nextPost']
	}
</script>
<style lang='scss'>
	.blog-single {
		&__pagination {
		  position: fixed;
		  top: 20px;
		  left: 55%;
		  -webkit-transform: translateX(-50%);
		  transform: translateX(-50%);
		  background-color: rgba(0,0,0,0.7);
		  -webkit-border-radius: 20px;
		  border-radius: 20px;
		  -webkit-box-shadow: 1px 1px 15px 0 rgba(0,0,0,0.15);
		  box-shadow: 1px 1px 15px 0 rgba(0,0,0,0.15);
		  z-index: 7;
		  @include sm-size-max {
		  	left: 50%;
		  }
		  a {
		    position: relative;
		    height: 30px;
		    padding: 0 10px;
		    font-size: 14px;
		    line-height: 36px;
		    text-align: center;
		    color:#fff;
		    &:not(:last-child) {
		      border-right: 1px solid rgba(255,255,255,0.15);
		    }
		    &:hover {
		      color: $accent;
		    }
		  }
		  svg {
		    width: 18px;
		    height: 18px;
		    fill: $white;
		    position: relative;
		    top: 2px;
		    &:hover {
		      fill: $accent;
		    }
		  }
		}
	}
</style>