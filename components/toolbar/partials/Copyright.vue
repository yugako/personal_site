<template>
	<div class="copyright">
		Made with 
		<div class="copyright-icons">
			<i class="fas fa-heart"></i>
			<span>&amp;</span>

			<a href="https://vuejs.org/">
				<i class="fab fa-vuejs"></i>
			</a>
			
		</div>
		
	</div>
</template>
<script>
	export default {
		name: 'copyright',
	}
</script>
<style lang='scss'>
	.copyright {
		color: $white;
		text-align: center;
		&-icons {
			display: flex;
			align-items: center;
			justify-content: space-between;
			i {
				color: $white;
			}
			a {
				line-height: 0;
			}
			.fa-vuejs {
				&:hover {
					color: green;
				}
			}
			.fa-heart {
				&:hover {
					color: darkred;
				}
			}
		}
		
	}
</style>