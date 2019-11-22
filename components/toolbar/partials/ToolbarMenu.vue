<template>
	<nav class='toolbar-menu'> 
		<nuxt-link class="toolbar-menu__link" active-class='link-active' to="/">
    		Home
    	</nuxt-link>
    	<nuxt-link class="toolbar-menu__link" active-class='link-active' to="/about">
    		About
    	</nuxt-link>
    	<nuxt-link class="toolbar-menu__link" active-class='link-active' to="/blog">
    		Blog
    	</nuxt-link>
    	<nuxt-link class="toolbar-menu__link" active-class='link-active' to="/portfolio">
    		Portfolio
    	</nuxt-link>
    	<nuxt-link class="toolbar-menu__link" active-class='link-active' to="/contact">
    		Contact
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
			margin-bottom: 7px;
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