<template>
	<transition name='slide-fade'>
		<div class="popup">
			<div class="popup-title" v-if='data.title'>
				<h2>{{data.title}}</h2>
			</div>
			<div class="popup-thumb" v-if='data.thumbnail'>
				<img :src="data.thumbnail" :alt="data.title">
			</div>
			<div class="popup-content">
				<div class='popup-content__descr' v-html="$md.render(data.body)"></div>
				<div class="popup-content__buttons">
					<g-button v-if='data.demo' class='popup-content__button' :external='data.demo' text='View Demo' />
					<g-button v-if='data.source' class='popup-content__button' :external='data.source' text='Source' />
				</div>
			</div>
			
			<span @click='closePopup' class="popup__close">&times;</span>
		</div>
	</transition>
</template>
<script>
	import GButton from '@/components/elements/GButton';

	export default {
		name: 'popup',
		props: ['data'],
		data() {
			return {

			}
		},
		methods: {
			closePopup() {
				this.$store.commit('isOpened');
			}
		},
		components: {
          GButton
        }
		
	}
</script>
<style lang="scss">
	.popup {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		justify-content: center;
		flex-direction: column;
		background-color: $light-dark;
		color: $white;
		z-index: 99999;
		opacity: 1;
		&-title {
			margin-bottom: 20px;
		}
		&-thumb {
			margin-bottom: 20px;
			img {
				max-width: 50vw;
				width: 100%;
				height: auto;
				margin: auto;
				@include sm-size-max {
					max-width: 90vw;
				}
			}
			
		}
		&__close {
			position: absolute;
			top: 30px;
			right: 30px;
			font-size: 5rem;
			color: $white;
			cursor: pointer;
			line-height: 1rem;
			&:hover {
				color: $accent;
			}
		}
		&-content {
			max-width: 50vw;
			margin: 0 auto;
			width: 100%;
			@include sm-size-max {
				max-width: 90vw;
			}
			a {
				color: $accent;
			}
			&__button {
				text-align: left;
				margin-right: 30px;
			}
			&__buttons {
				display: flex;
			}
			&__descr {
				text-align: left;
				margin-bottom: 20px;
				ul {
					margin-top: 15px;
					margin-bottom: 15px;
					li {
						line-height: 2rem;
						color: $text-color;
						&::before {
							content: '';
							width: 15px;
							height: 15px;
							background-color: $accent;
							border-radius: 50%;
							margin-right: 10px;
							display: inline-block;
						}
						
					}
				}

			}
		}
	}
</style>