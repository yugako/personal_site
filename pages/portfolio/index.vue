<template>
  <section class="portfolio">
    <div class="container">
        <g-title class='portfolio-title' text='Portfolio' />
        
        <div class="portfolio-filter">
          <ul class="portfolio-filter__list">
            <li 
              class="portfolio-filter__item" 
              v-for='filter in worksCat' 
              :key='filter.param' 
              :class='{active: filter.param === activeName}' 
              @click='filterWorks(filter.param)'
              >{{filter.name}}
            </li>
          </ul>
          <!-- /.portfilio-filter__list -->
         </div>
          <!-- /.portfolio-filter -->
        <transition-group class='row' name='bounce' tag='div'>
          <div 
            class='col-12 col-md-6 col-lg-4' 
            v-for='work in filtered' 
            :key='work.title'
          >
            <div class="portfolio-item-wrapper">
              <div class="portfolio-item">
                  <div class="portfolio-item__img" :style="{'background-image': `url(${work.thumbnail})`}"></div>
                  <div class="portfolio-item__title">{{work.title}}</div>
                  <div class="portfolio-item__links">
                    <span title="Show details" @click.prevent='showDetails(work)' class="portfolio-item__link">
                     Details
                    </span>
                    <a title="Go to demo" target="_blank" :href="work.demo" class="portfolio-item__link">
                     Demo
                    </a>
                </div>
              </div>
            </div>
            
          </div>
        </transition-group>
        <div class="none" v-if='filtered.length === 0'>Works not found!</div>
        <transition name='bounce'>
          <Popup 
            :data='popupData'
            v-if='isPopupOpened' 
          />
        </transition>
     
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
            this.filtered = this.works.filter(item => item.category === cat);
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
        },
        works() {
          return this.$store.state.works;
        }
      },
        
    components: {GTitle,Popup}
  }
</script>
<style lang='scss'>
  .portfolio {
    color: $white;
    background-color: $light-dark;
    text-align: center;
    padding-bottom: 80px;
    
    &-title {
      padding-top: 60px;
      margin-bottom: 110px;
      @include md-size-max {
        padding-top: 30px;
      }
    }
    &-wrapper {
        overflow: hidden;
      }
    &-item {
      width: 100%;
      overflow: hidden;
      position: relative;
   
      &__img {
        padding-top: 75%;
        background-size: cover;
        position: relative;
        background-position: center;
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background-color: rgba($accent, 0);
          transition: all 0.3s ease;
        }
      }
      $p: &;
      
      &:hover {
        #{$p}__img {
          filter: blur(5px);
          transform: scale(1.1);
          z-index: 99;
          &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;
            background-color: rgba($accent, 0.6);
            transition: all 0.3s ease;
            transform: scale(1.1);
          }
        }
        #{$p}__title {
          opacity: 1;
          z-index: 100;
        }
        #{$p}__link {
          z-index: 100;
          &:first-child {
            transform: translateX(0%);
          }
          &:last-child {
            transform: translateX(0%);
          }
        }
        
      }
      &__title {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 3;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
      &__links {
        color: $white;
        width: 100%;
        padding: 7px 15px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;
        position: absolute;
        bottom: 0;

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

      &__link {
        &:first-child {
          transform: translateX(-200%);
        }
        &:last-child {
          transform: translateX(200%);
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
          flex-direction: column;

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