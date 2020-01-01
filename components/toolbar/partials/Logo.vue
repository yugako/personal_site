<template>
	<div class='site-logo'>
		<nuxt-link exact to="/">
    		<img src="@/assets/img/logo.png">
    		<span class="site-logo__text">Y.H.L</span>
    	</nuxt-link> 
	</div>
</template>
<script>
	export default {
		name: 'logo',
		data() {
			return {

			}
		}
	}
</script>
<style lang='scss'>
	.site-logo {
		display: block;
		text-align: center;
		img {
			max-width: 50px;
			max-height: 50px;
			display: block;
			margin: auto;
		}
		
		a {
			color: $white;
			text-decoration: none;
		}
		&__text {
			font-family: $secondary-font;
			font-weight: 600;
		}
		@media (max-height: 500px) {
			margin-bottom: 30px;
		}
	}
</style>