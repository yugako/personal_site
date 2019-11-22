<template>
  <section class="contact">
    <g-title class='contact-title' text='Contact' />
  </section>
</template>

<script>
  import GTitle from '@/components/elements/GTitle';

  export default {
    name: 'Contact',
    head: {
      title: 'Contact',
      meta: [
        { hid: 'description', name: 'description', content: 'Get in Touch :)' }
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
  .contact {
    background-color: rgba($dark, 0.9);
    
    &-title {
      padding-top: 60px;
      @include md-size-max {
        padding-top: 30px;
      }
    }
  }
</style>