<template>
  <section class="error">
    <div class="container error-message">
      <h1 v-if="error.statusCode === 404">Ooops...Page not found!</h1>
      <h1 v-else>Something went wrong :(</h1>
      <g-button link='/' text='Back to Home' />
    </div>
  </section>
</template>
<script>
import GButton from '@/components/elements/GButton';
export default {
  props: ['error'],
  components: {
    GButton
  }
}

</script>
<style lang="scss" scoped>
.error {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  overflow-y: auto;

  &-message {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1 {
      	font-size: 3rem;
      	color: $white;
      	text-align: center;
		margin-bottom: 25px;
     
      	@include sm-size-max {
        	font-size: 2rem;
      	}

      	@include xs-size-max {
        	font-size: 1.5rem;
      	}
    }
  }
}

</style>
