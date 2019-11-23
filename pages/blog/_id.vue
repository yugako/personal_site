<template>
 <article class="blog-single">
      <scrollbar />
      <!-- Posts pagination -->
      <pagination :prevPost='prevPost' :nextPost='nextPost' />
      <!-- Post Content -->
      <div class="blog-single__img" :style='{backgroundImage: `url(${article.thumbnail})`}'></div>
      <div class="container page-component">
        
        <div class="blog-single__header">
           <h1 class="blog-single__header-title">{{article.title}}</h1>
            <span class="blog-single__header-date"><i class="fas fa-calendar-alt"></i>{{parseDate}}</span>
        </div>
        
        <div class="blog-single__content" v-html="$md.render(article.body)"></div>
        <!-- <vue-disqus shortname="personal-12" :identifier="article.id" :url="this.id"></vue-disqus> -->
       
      </div>
    </article>
  
</template>

<script>
  import pagination from '@/components/blog/Pagination.vue';
  import scrollbar from '@/components/elements/Scrollbar.vue';

  export default {
    name: 'index',
    head () {
      
      let description = this.article.description;
      
      return {
        title: `${this.article.title}`,
        meta: [
          {
            hid: `description`,
            name: 'description',
            content: `${this.article.description}`
          },
          {
            hid: 'twitter:image', 
            name: 'twitter:image', 
            content: this.article.thumbnail
          },
          {
            hid: 'og:image', 
            name: 'og:image', 
            content: this.article.thumbnail
          },
          {
            hid: `og:title`,
            name: 'og:title',
            content: this.article.title
          },
          {
            hid: 'og:description',
            name: 'og:description',
            content: description
          },
          {
            hid: 'og:type',
            name: 'og:type',
            content: 'article'
          },
          {
            hid: 'fb:app_id',
            name: 'fb:app_id',
            content: '2407963696130108'
          },
        ]
      }
    },
    async asyncData({ params, payload }) {
      if (payload) {
        return { article: payload };
      } else {

        return {
          article: await require(`~/assets/content/blog/${params.id}.json`),
        };
      }
        
      },
    data() {
      return {
        id: this.$route.params.id,
        pageTitle: this.$route,
      }
    },
    methods: {
      nextPost() {
        let index = this.currentPostIndex;
        if (this.blogPosts[index+1]) {
          this.$router.push({'path': '/blog/' + this.blogPosts[index+1].slug})
        }
        
      },
      prevPost() {
         let index = this.currentPostIndex;
        if (this.blogPosts[index-1]) {
          this.$router.push({'path': '/blog/' + this.blogPosts[index-1].slug})
        }
      }
    },
    computed: {
      blogPosts() {
        return this.$store.state.blogPosts;
      },
      currentPostIndex () {
        let currentPost = null;
        this.blogPosts.forEach((item, index) => {
          if (this.$route.params.id == item.slug) {
            currentPost = index;
          }
        });
        return currentPost;
      },
      parseDate() {
        let day, month, year;

        day = new Date(this.article.date).getDay();
        day = day > 9 ? day: '0' + day;

        month = new Date(this.article.date).getMonth();
        month = month > 9 ? month: '0' + month;

        year = new Date(this.article.date).getFullYear();
        year = year > 9 ? year: '0' + year;

        return `${day}.${month}.${year}`;
      }
    },
    components: {pagination, scrollbar}
  }
</script>
<style lang='scss'>
  .blog-single {
    background-color: $light-dark;
    padding-bottom: 100px;

    &__img {
      padding-top: 30%;
      background-size: cover;
      background-position: center;
      width: 100%;
      @include md-size-max {
        padding-top: 40%;
      }
      @include sm-size-max {
        padding-top: 50%;
      }
    }
    &__header {
      padding-top: 70px;
      padding-bottom: 70px;
      @include md-size-max {
        padding-top: 50px;
        padding-bottom: 50px;
      }
      @include sm-size-max {
        padding-top: 40px;
        padding-bottom: 40px;
      }
       text-align: center;
      &-title {
        font-size: 40px;
        text-transform: uppercase;
        margin-bottom: 15px;
        color: $white;
        @include md-size-max {
          font-size: 35px;
        }
        @include sm-size-max {
          font-size: 30px;
        }
      }
      &-date {
        color: $white;
        font-size: 14px;
        i {
          font-size: 13px;
          margin: 0 5px 0 10px;
          color: $accent;
        }
      } 
    }
    &__content {
      padding-left: 15px;
      padding-right: 15px;
        p {
            color: $white;
            font-family: $secondary-font;
            margin-bottom: 1rem;
            margin-top: 1rem;
            &:first-child {
              &::first-letter {
                font-size: 40px;
                font-weight: 700;
                line-height: 1.2;
                margin-top: -10px;
                float: left;
                text-transform: uppercase;
                padding-right: 15px;
              }
            }
        }
        
        img {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: contain;
        }

        a {
          color: $accent;
        }

        pre {
          background: $light;
          border-left: 3px solid $accent;
          color: $text-color;
          page-break-inside: avoid;
          font-family: monospace;
          letter-spacing: normal;
          font-size: 13px;
          max-width: 100%;
          overflow: auto;
          padding: 0.3em 1.5em;
          display: block;
          overflow-wrap: break-all;
          white-space: pre;
          @include sm-size-max {
            font-size: 12px;
          }
          
          
        }
        p + pre {
          &:first-child {
            padding-top: 1.5rem;
          }
          &:last-child {
            padding-bottom: 1.5rem;
          }
        }
    }
  }
</style>