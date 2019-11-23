<template>
  <section class="portfolio">
    <div class="container">
        <g-title class='portfolio-title' text='Portfolio' />
        
        <div class="portfolio-filter">
          <ul class="portfolio-filter__list">
            <li 
              class="portfolio-filter__item" 
              v-for='filter in worksCat' 
              :key='filter.name' 
              :class='{active: filter.param === activeName}' 
              @click='filterWorks(filter.param)'
              >{{filter.name}}
            </li>
          </ul>
          <!-- /.portfilio-filter__list -->
         </div>
          <!-- /.portfolio-filter -->
        <transition-group class='row' name='slide-fade' tag='div'>
          <div 
            class='col-12' 
            :class='{"col-12 col-md-6 col-lg-3": Expanded}' 
            v-for='work in filtered' 
            :key='work.id'
          >
            <div class="portfolio-item-wrapper">
              <div class="portfolio-item" :style="{'background-image': `url(${work.img})`}">
                  <div class="portfolio-item__links">
                  <span title="Show details" @click.prevent='showDetails(work)' class="portfolio-item__link">
                   Details
                  </span>
                  <a title="Go to demo" :href="work.url" class="portfolio-item__link">
                   Source
                  </a>
                </div>
              </div>
            </div>
            
          </div>
        </transition-group>
        <div class="none" v-if='filtered.length === 0'>Works not found!</div>
        <Popup 
          :data='popupData'
          v-if='isPopupOpened' 
        />
     
    </div>
  </section>
  <!-- /.portfolio-works -->
</template>
<script>
  import Popup from '@/components/elements/Popup';
  import GTitle from '@/components/elements/GTitle';
  export default {
    name: 'portfolioWorks',
    created() {
      this.filtered = this.works;
    },
    head: {
      title: 'Portfolio',
      meta: [
        { hid: 'description', name: 'description', content: 'List of my works :)' }
      ],
    },
      data () {
      return {
        activeName: '',
        works: [],
        filtered: [],
        worksCat: [
          {
            name: 'All',
            param: '',
          },
          {
            name: 'Sites',
            param: 'sites',
          },
          {
            name: 'Personal Projects',
            param: 'personal',
          }
        ],
        expanded: false,
        infoPopupData: '',
        
      }
    },
      
    methods: {
      filterWorks(cat) {
          this.filtered = [];
          if(cat) {
          this.clearActive();
          this.filtered = this.works.filter(item => item.cat === cat);
          cat == 'sites' ? this.activeName = 'sites' : this.activeName = 'personal';
          } else {
          this.clearActive();
          this.filtered = this.works;
          this.activeName = '';
          }
      },
      clearActive() {
          this.activeName = false;
      },
      showDetails(info) {
        this.$store.commit('setPopupData', info);
        this.$store.commit('isOpened');
      },
      
      },
    computed: {
        Expanded() {
          return this.$store.getters.Expanded;
        },
        isPopupOpened() {
          return this.$store.getters.PopupOpened;
        },
        popupData() {
          return this.$store.getters.PopupData;
        }
      },
        
    components: {GTitle,Popup}
  }
</script>
<style lang='scss'>
  .portfolio {
    color: $white;
    padding: 40px;
    background-color: $light-dark;
    text-align: center;
    
    &-title {
      padding-top: 60px;
      margin-bottom: 110px;
      @include md-size-max {
        padding-top: 30px;
      }
    }
  
    &-item {
      width: 100%;
      padding-top: 75%;
      background-size: cover;
      margin-bottom: 20px;
      background-position: center;
      filter: grayscale(1);
      overflow: hidden;
      &__links {
        position: absolute;
        bottom: -50px;
        left: 0;
        background-color: $dark;
        color: $accent;
        width: 100%;
        padding: 7px 15px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        a {
          color: inherit;
          text-decoration: none;
          &:hover {
            color: $white;
          }
        }
        @include md-size-max {
          bottom: 0;
        }
      }
      &-wrapper {
        overflow: hidden;
      }
      $links: &;
      &:hover {
        filter: grayscale(0);
        transform: scale(1.1);
        #{$links}__links {
          bottom: 0;
          transition-delay: 0.4s;
        }
      }
    }
    &-filter {
      &__list {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 50px;
        position: relative;
        padding: 0 20px;
        background-color: $dark;
        box-shadow: 0 0 10px 0px rgba($white, .1);
        border-radius: 50px;
        @include sm-size-max {
          display: flex;

        }
      }
      &__item {
        margin: 0px 10px;
        text-align: center;
        position: relative;
        display: inline-block;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
        padding: 10px 25px;
        -webkit-transition: all .3s;
        transition: all .3s;
        &.active {
          color: $dark;
          background-color: $accent;
          transition: all .3s;
           border-radius: 50px;
        }
        &:hover {
          cursor: pointer;
        }
        
      }
    }
    .none {
      text-align: center;
    }
  }
</style>