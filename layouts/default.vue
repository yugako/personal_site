<template>
  <div class="app" >
    <!-- Toolbar -->
    <transition name='slide-fade'>
       <Toolbar v-if='IsToolbar' />
    </transition>

    <!-- Content view -->
    <div class="app-wrapp" @click.stop='hideMenu'>
      <transition name='slide-fade'>
        <nuxt class='app-view'  :class='{"toolbar-active": IsToolbar}' />
      </transition>
    </div>  
    
   
    <!-- Toolbar toggler -->
    <toolbar-opener />
  </div>
</template>

<script>
  import Toolbar from '~/components/toolbar/Toolbar.vue';
  import ToolbarOpener from '~/components/toolbar/partials/ToolbarOpener.vue';
  export default {
    mounted() {
      this.$nextTick(function() {
          const self = this;

          window.addEventListener('resize', () => {
              if (window.innerWidth > 767) {
                  if (!self.IsToolbar) {
                      self.$store.commit('isMenuOpened');
                  }
                  
              }
          });

      })
    },
    methods: {
      hideMenu() {
        const windowWidth = window.innerWidth;

        if (windowWidth < 768 && this.IsToolbar) {
          console.log('opened')
          this.$store.commit('isMenuOpened');
          this.$store.commit('CheckHamburger');
        }
      }
    },
    components: {
      Toolbar, ToolbarOpener
    },
    computed: {
        IsToolbar () {
            return this.$store.getters.MenuOpened;
        }
    }
    
  }
</script>
<style lang="scss">
  /* General */

  * {
    padding: 0;
    margin: 0;
    transition: all 0.3s;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba($dark, 0.3);
    background-color: $accent;
  }

  ::-webkit-scrollbar {
    width: 6px;
    background-color: $accent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: $dark;
  }
  ::selection {
    background-color: $accent;
    color: $white;
  }

  html, body {
    overflow-x: hidden!important;
    font-family: $primary-font;

  }

  ul {
    list-style: none;
    padding-left: 0;
  }
  a {
    &:active, &:focus {
      outline: none;
    }
  }

  .img-fluid {
    width: 100%;
    height: auto;
  }
  .app {
    display: flex;
    width: 100%;
    overflow-y: auto;
    background-image: url('../assets/img/coffee_bg.jpg'), url('../assets/img/coffee_bg.webp');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;
    z-index: 9;
    &::before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba($dark, 0.55);
        z-index: -1;
    }
    &-wrapp {
      width: 100%;
      height: inherit;
      margin: 0;
    }
    &-view {
      width: 100%;
      min-height: 100vh;
    }
  }

  /* Transition animations */

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-100%);
  opacity: 0;
}

// Bounce

.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}


</style>

