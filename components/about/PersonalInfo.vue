<template>
 	<div class="about-person">
 		<div class="row align-items-center">
 				<div class="col-12 col-md-4 col-xl-3">
 					<div class="about-person__photo">
 						<img class="img-fluid" :src="profileImageURL" :alt='name'>
 					</div>
 				</div>
 				<div class="col-12 col-md-8 col-xl-9">
 					<h4 class="about-person__name">
 						{{name}}
 					</h4>
 					<div class="about-person__loc">
						<i class="fas fa-map-marked-alt"></i> 
						{{location}}
					</div>
					<div class="about-person__descr">
						<p>
							{{description}} 
						</p>
					</div>
					<g-button :external='cvURL' text='Download CV' />
 				</div>
 			</div>
 	</div>
</template>
<script>
	import {personal, links} from '@/info/info.js';
	import GButton from '@/components/elements/GButton';

	const {name, location, description} = personal;
	const {cvURL, profileImageURL} = links;
    export default {
        name: 'about',
        data() {
        	return {
        		name,
        		location,
        		description,
        		cvURL,
        		profileImageURL 
        	}
        },
        components: {
          GButton
        }
    }
</script>
<style lang='scss'>
	.about {
		&-person {
			position: relative;
			padding: 30px;
			background-color: $dark;
			transition: all .3s ease-in-out;
			border-radius: 10px;
			margin-bottom: 65px;
			@include md-size-max {
				margin-bottom: 40px;
				padding-bottom: 45px;
				.column {
					margin-top: 20px;
					@include sm-size-max {
						&:first-child {
							margin-top: 0;
						}
					}
				}
			}

			@include sm-size-max {
				margin-bottom: 35px;
			}
			
			&__photo {
				img {
					border-radius: 50%;
					object-fit: cover;
					object-position: center;
			
					@include sm-size-max {
						width: 150px;
						height: 150px;
						display: block;
						margin: auto;
						margin-bottom: 20px;
					}
				}
				
			}
			&__name {
				font-size: 1.125rem;
				color: $white;
				@include sm-size-max {
					text-align: center;
				}
			}
			&__descr {
				p {
					line-height: 1.5rem;
					text-align: justify;
					color: $white;
					margin-bottom: 1rem;

				}
				a {
					color: $accent;
				}
			}
			&__loc {
				font-size: 0.75rem;
				color: $white;
				padding-top: 15px;
				padding-bottom: 15px;
				color: $accent;
				@include sm-size-max {
					text-align: center;
				}
			}
			&__feature {
				display: flex;

				i {
					display: flex;
				    float: left;
				    width: 45px;
				    height: 45px;
				    align-items: center;
				    justify-content: center;
				    color: $white;
					background: $light-dark;
					font-size: 20px;
					-webkit-border-radius: 100%;
					border-radius: 100%;
					border: 1px solid $white;
					margin-right: 15px;
				}
				&-desc {
					padding-left: 15px;
					padding-top: 5px;
					color: $white;
					h6 {
						font-size: 15px;
					    font-weight: 400;
					    line-height: 15px;
					}
					p {
						font-size: 12px;
						line-height: 21px;
						color: $accent;
						
					}

				}
			}
		}
	}
</style>