<template>
	<div class="socials">
		<ul class='socials-list'>
			<li class='socials-list__item'>
				<a href="https://www.facebook.com/yurii.koltso" class='socials-list__link'>
					<i class="fab fa-facebook"></i>
				</a>
			</li>
			<li class='socials-list__item'>
				<a href="https://www.linkedin.com/in/yurii-koltso/" class='socials-list__link'>
					<i class="fab fa-linkedin"></i>
				</a>
			</li>
			<li class='socials-list__item'>
				<a href="https://github.com/yugako" class='socials-list__link'>
					<i class="fab fa-github-alt"></i>
				</a>
			</li>
			<li class='socials-list__item'>
				<a href="https://t.me/y_gasyuk" class='socials-list__link'>
					<i class="fab fa-telegram-plane"></i>
				</a>
			</li>
			<li class='socials-list__item'>
				<a href="mailto:yurii.koltso@gmail.com" class='socials-list__link'>
					<i class="fas fa-envelope"></i>
				</a>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'socials',
		data() {
			return {}
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