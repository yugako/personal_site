<template>
  <section class="portfolio">
    <g-title class='portfolio-title' text='Portfolio' />
  </section>
</template>

<script>
  import GTitle from '@/components/elements/GTitle';

  export default {
    name: 'Portfolio',
    head: {
      title: 'Portfolio',
      meta: [
        { hid: 'description', name: 'description', content: 'List of my works :)' }
      ],
    },
    data() {
    	return {}
    },
    components: {
      GTitle
    }
  }
</script>
<style lang='scss'>
  .portfolio {
    background-color: rgba($dark, 0.9);
    
    &-title {
      padding-top: 60px;
      @include md-size-max {
        padding-top: 30px;
      }
    }
  }
</style>