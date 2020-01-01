<template>
	<div class="about-services">
		<div class="row">
			<div class="col col-12 col-lg-6" v-for='service in services' :key='service.title'>
				<div class="about-services__item">
					<i :class="service.icon"></i>
					<h4 class="about-services__item-title">{{service.title}}</h4>
					<p class="about-services__item-descr">{{service.excerpt}}</p>
				</div>
			</div>			
		</div>
	</div>
</template>
<script>
	import {services} from '@/info/info.js';
	
	export default {
		name: 'services',
		data() {
			return {
				services,
			}
		}
	}
</script>
<style lang='scss'>
	.about {
		&-services {
			padding-top: 85px;
			@include md-size-max {
			  	padding-top: 80px;
			}
			@include sm-size-max {
			  	padding-top: 80px;
			}
			.col:last-child {
				margin-left: 25%;
				@include md-size-max {
					margin-left: 0;
				}
			} 
			&__item {
				text-align: center;
				position: relative;
				padding: 30px;
				background-color: $dark;
				transition: all .3s ease-in-out;
				border-radius: 10px;
				margin-bottom: 20px;
				i {
					position: relative;
					width: 70px;
					height: 70px;
					font-size: 25px;
					line-height: 70px;
					color: $white;
					background-color: $light-dark;
					-webkit-border-radius: 50%;
					border-radius: 50%;
					text-align: center;
					
					
					&:hover {
						&::after {
							content: '';
							position: absolute;
							width: 60px;
							height: 60px;
							top: 5px;
							left: calc(50% - 30px);
							border-radius: 100%;
							border: 1px solid $accent;
							animation: zoomIn .3s ease;
						}
					}
				}
				&-title {
					padding-top: 20px;
					padding-bottom: 20px;
					color: $white;
				}

				&-descr {
					color: $white;
				}
			}
			

			@keyframes zoomIn {
				from {
					opacity: 0;
					-webkit-transform: scale3d(0.3, 0.3, 0.3);
							transform: scale3d(0.3, 0.3, 0.3);
				}
				50% {
					opacity: 1;
				}
			}
		}
	}
</style>