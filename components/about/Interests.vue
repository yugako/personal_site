<template>
	<div class="about-interests">
		<div class="row">
			<div class="col-12 col-sm-6 col-lg-4" v-for='interest in interests' :key='interest.title'>
				<div class="about-interests__item">
					<i :class="interest.icon"></i>
				</div>
        	 	<div class="about-interests__desc">
					<h6>{{interest.title}}</h6>
   	        	</div>
			</div>
		</div>
 	</div>
</template>
<script>
	import {interests} from '@/info/info.js';
	export default {
		name: 'interests',
		data() {
			return {
				interests
			}
		}
	}
</script>
<style lang='scss'>
	.about {
		&-interests {
			position: relative;
			padding: 30px;
			background-color: $dark;
			transition: all .3s ease-in-out;
			border-radius: 10px;
			margin-top: 80px;
			margin-bottom: 65px;
			@include md-size-max {
			  	margin-top: 80px;
			  	margin-bottom: 40px;
			  }
			&__item {
				position: relative;
				background: $light-dark;
				padding: 15px;
				transition: all .3s ease-in-out;
				display: flex;
				align-items: center;
				border-radius: 10px;
				margin-bottom: 20px;
				&::before {
					content: '';
					height: 100%;
					width: 3px;
					background-color: $dark;
					left: 50px;
					position: absolute;
				}
				&:hover {
					background-color: transparent;
				}
				i {
					position: relative;
					width: 30px;
					display: flex;
					align-items: center;
					justify-content: center;
					color: $accent;
					font-size: 1.3rem;
					margin-right: 30px;
				}
			}
			&__desc {
				h6 {
					font-size: 1rem;
					font-weight: 100;
					line-height: 15px;
					color: $white;
				}
				
			}
		}
	}
</style>