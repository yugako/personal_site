<template>
	<nav class='toolbar-menu'> 
		<nuxt-link class="toolbar-menu__link" exact active-class='link-active' to="/">
    		<i class="fas fa-house-damage"></i>
    	</nuxt-link>
    	<nuxt-link class="toolbar-menu__link" active-class='link-active' to="/about">
    		<i class="fas fa-user-tie"></i>
    	</nuxt-link>
    	<nuxt-link class="toolbar-menu__link" active-class='link-active' to="/blog">
    		<i class="fas fa-receipt"></i>
    	</nuxt-link>
    	<nuxt-link class="toolbar-menu__link" active-class='link-active' to="/portfolio">
    		<i class="fas fa-briefcase"></i>
    	</nuxt-link>
    	<nuxt-link class="toolbar-menu__link" active-class='link-active' to="/contact">
    		<i class="fas fa-envelope"></i>
    	</nuxt-link>    
	</nav>
</template>
<script>
	export default {
		name: 'toolbar-menu',
		data() {
			return {

			}
		}
	}
</script>
<style lang='scss'>
	.toolbar-menu {
		&__link {
			color: $white;
			// transform: rotateZ(-90deg);
			display: block;
			text-align: center;
			text-decoration: none;
			margin: 30px 0px;
			i {
				font-size: 27px;
			}
			&:hover {
				color: $accent;
			}
			&.link-active {
				color: $accent;
			}
		}
		@media (max-height: 500px) {
			margin-bottom: 30px;
		}
	}
</style>