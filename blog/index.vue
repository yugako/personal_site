<template>
  <section class="blog">
    <g-title class='blog-title' text='Blog' />
    <articles class='blog-articles' :pages='pages' />
  </section>
</template>

<script>
  import articles from '@/components/blog/articles';
  import GTitle from '@/components/elements/GTitle';

  export default {
    name: 'Blog',
    head: {
      title: 'Blog',
      meta: [
        { hid: 'description', name: 'description', content: 'One more blog about web development' }
      ],
    },
    data() {
    	return {
    		pages: null
    	}
    },
    components: {
      articles, GTitle
    }
  }
</script>
<style lang='scss'>
  .blog {
    background-color: $light-dark;
    padding-top: 80px;
    padding-bottom: 60px;
    @include md-size-max {
      padding-top: 80px;
    }
    @include md-size-max {
      padding-top: 70px;
    }
  
    &-articles {
      margin-top: 80px;
    }
  }
</style>