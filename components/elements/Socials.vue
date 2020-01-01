<template>
	<div class="socials">
		<ul class='socials-list'>
			<li class='socials-list__item' v-for='social in socials' :key='social.link'>
				<a :href="social.link" target="_blank" class='socials-list__link'>
					<i :class="social.icon"></i>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	import {socials} from '@/info/info.js';

	export default {
		name: 'socials',
		data() {
			return { socials }
		}
	}
</script>
<style lang='scss'>
	.socials {
		position: absolute;
		top: 20px;
		right: 20px;
		@include sm-size-max {
			top: initial;
			bottom: 20px;
		}
		&-list {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			&__item {
				margin-bottom: 15px;
				&:last-child {
					margin-bottom: 0;
				}
			}
			&__link {
				color: $white;
				&:hover {
					color: $accent;
				}
				svg {
					width: 18px;
					height: 18px;
					fill: $white;
					&:hover {
						fill: $accent;
					}
				}
				
			}
		}
	}
</style>