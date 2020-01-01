<template>
	<transition name='slide-fade'>
		<div class="popup">
			<div class="popup-wrapper">
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
		beforeMount() {
			const html = document.querySelector('html');

			html.style.overflow = 'hidden';
		},
		beforeDestroy() {
			const html = document.querySelector('html');

			html.style.overflow = '';
		},
		methods: {
			closePopup() {
				this.$store.commit('isOpened');
			}
		},
		computed: {
			PopupOpened() {
				return this.$store.getters.PopupOpened;
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
		padding-top: 30px;
		padding-bottom: 30px;
		@include xs-size-max {
			padding-top: 50px;
			padding-bottom: 50px;
		}
		&-wrapper {
			max-width: 75vw;
			max-height: 90vh;
			margin: 0 auto;
			width: 100%;
			overflow-y: auto;
			@include sm-size-max {
				max-width: 90vw;
			}
		}
		&-title {
			margin-bottom: 20px;
		}
		&-thumb {
			margin-bottom: 20px;
			img {
				max-width: 75vw;
				width: 100%;
				height: auto;
				max-height: 300px;
				object-fit: cover;
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
			@include xs-size-max {
				top: 15px;
				right: 15px;
			}
		}
		&-content {
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
						line-height: 1.73rem;
						color: $white;
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
				p, a {
					margin-bottom: 7px;
				}

			}
		}
	}
</style>