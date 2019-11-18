<template>
	<div class="progress">
	  <div class="progress-container">
	    <div class="progress-bar" ref="bar"></div>
	  </div> 
	</div>
</template>
<script>
	export default {
		name: 'ScrollBar',
		methods: {
		    handleScroll () {
		    	let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
	      		let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	      		let scrolled = (winScroll / height) * 100;


	      		this.$refs.bar.style.width = scrolled + "%";
		      	
		    }
		},
		created () {
			if (process.browser) {
				console.log('dsf')
				window.addEventListener('scroll', this.handleScroll);
			}
		    
		},
	  	destroyed () {
	  		if (process.browser) {
	  			window.removeEventListener('scroll', this.handleScroll);
	  		}
	    	
	  	}
	}
</script>
<style lang='scss'>
	/* Styles for parent block */
	.progress {
	    position: fixed;
	    top: 0;
	    left: 100px;

	    z-index: 1;
	    width: 100%;
	    height: 3px;
	    border-radius: 0px;
	}

	/* Progress bar container */
	.progress-container {
	  width: 100%;
	  height: 3px;
	  background: #ccc;
	}

	/* Progress bar */
	.progress-bar {
	  height: 3px;
	  background: $accent;
	  width: 0%;
	}
</style>