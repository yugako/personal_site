<template>
 	<div class="about-person">
 		<div class="row align-items-center">
 				<div class="col-12 col-md-4 col-xl-3">
 					<div class="about-person__photo">
 						<img class="img-fluid" src="https://scontent.flwo3-1.fna.fbcdn.net/v/t1.0-9/70062120_1080218812148837_2300144141662683136_n.jpg?_nc_cat=108&_nc_oc=AQmra2Tc2a1ySBn85D1c8Rlugyin-5yryJKqudTt_roxfc6WGB5YnrUp0la1Ga6lNzU&_nc_ht=scontent.flwo3-1.fna&oh=21740a93001b7821c4b560998b3c56ed&oe=5E216312" alt='GG'>
 					</div>
 				</div>
 				<div class="col-12 col-md-8 col-xl-9">
 					<h4 class="about-person__name">
 						George Gasyuk
 					</h4>
 					<div class="about-person__loc">
						<i class="fas fa-map-marked-alt"></i> 
						Lviv, Ukraine
					</div>
					<div class="about-person__descr">
						<p>
							Hello! I’m George Gasyuk a self-taught & hard-working Frontend & Wordpress Developer with over 2 years work experience. If you want a blog, site for your company or even some <a title="What is SPA" target="_blank" href="https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58">SPA</a>, then you're in the right place. 
						</p>
					</div>
					<g-button external='https://drive.google.com/open?id=16diMItjPj-x6-Ah24nQpR4CJPqPee3NP' text='Download CV' />
 				</div>
 			</div>
 	</div>
</template>
<script>
	import GButton from '@/components/elements/GButton';

    export default {
        name: 'about',
        data() {
        	return {}
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
			background-color: #070708;
			-webkit-transition: all .3s ease-in-out;
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
				    color: #fff;
					background: #0e0f10;
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