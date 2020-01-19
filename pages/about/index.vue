<template>
    <div class="about">
    	<div class="container">
    		<!-- About person -->
	     	<g-title class='about-title' text='About' />
	     	<personal-info />

	     	<!-- About person interests -->
	     	<g-title class='about-title' text='My interests' />
	     	<interests />

	     	<!-- Services	 -->
	     	<g-title class='about-title' text='My services' />
	     	<services />
    	</div>
     	
    </div>
</template>

<script>
	import GTitle from '@/components/elements/GTitle';
	import GButton from '@/components/elements/GButton';

	import PersonalInfo from '@/components/about/PersonalInfo';
	import Interests from '@/components/about/Interests';
	import Services from '@/components/about/Services';
    export default {
        name: 'about',
        components: {
          GTitle, GButton, PersonalInfo, Interests, Services
        },
        head: {
	      title: 'About',
	      meta: [
	        { hid: 'description', name: 'description', content: 'Want to know more about me? Then go ahead' }
	      ],
	    },
    }
</script>
<style lang='scss'>
	.about {
		background-color: $light-dark;
		font-family: $secondary-font;
		padding-top: 60px;
	  	padding-bottom: 100px;
		@include md-size-max {
		  	padding-top: 60px;
		  	padding-bottom: 60px;
		}
		&-title:first-child {
		  margin-bottom: 80px;
		  @include md-size-max {
		  	margin-bottom: 75px;
		  }
		  @include xs-size-max {
		  	margin-bottom: 70px;
		  }
		}

		@include xs-size-max {
		  	padding-top: 40px;
		  	padding-bottom: 0px;
		}
		
		
	}
</style>