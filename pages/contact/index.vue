<template>
  <section class="contact">
    <div class="container">
      <g-title class='contact-title' text='Contact' />
      <form netlify @submit.prevent='handleForm' method="post" class="contact-form contact-valid" id="contact-form" novalidate="novalidate">
          <div class="row">
            <div class="col-lg-6 col-sm-12">
                <input type="text" name="name" id="name" placeholder="Name *">
            </div>
            <div class="col-lg-6 col-sm-12">
                <input type="email" name="email" id="email" placeholder="Email *">
            </div>
            <div class="col-lg-12 col-sm-12">
                <textarea name="note" id="note" placeholder="Your Message"></textarea>
            </div>
            <div class="col-lg-12 col-sm-12 text-center">

                <button type="submit"  class="g-button">Send Message</button>
               <!--  <div id="loader" v-if='fail'>
                    <i class="fas fa-sync"></i>
                </div> -->
            </div>
            <!-- <div class="col-lg-12 col-sm-12">
              <div class="error-messages">
                <div id="success" v-if='success'>
                  <i class="far fa-check-circle"></i>Thank you, your message has been sent.
                </div>
                <div id="error" v-if='fail'>
                  <i class="far fa-times-circle"></i>Error occurred while sending email. Please try again later.
                </div>
              </div>
            </div> -->
          </div>
      </form>
    </div>
  </section>
</template>

<script>
  import GTitle from '@/components/elements/GTitle';
  import GButton from '@/components/elements/GButton';

  export default {
    name: 'Contact',
    head: {
      title: 'Contact',
      meta: [
        { hid: 'description', name: 'description', content: 'Get in Touch :)' }
      ],
    },
    data() {
    	return {
        success: false,
        fail: false
      }
    },
    methods: {
      handleForm() {
        this.success = true;
        setTimeout(function () {
          this.success = false;
        }, 3000);
      }
    },
    components: {
      GTitle, GButton
    }
  }
</script>
<style lang='scss'>
  .contact {
    background-color: $light-dark;
    padding-top: 60px;
    padding-bottom: 110px;
    @include md-size-max {
      padding-top: 40px;
      padding-bottom: 80px;
    }
    &-title {
      padding-top: 60px;
      margin-bottom: 110px;
      @include md-size-max {
        padding-top: 30px;
      }
    }

    &-form {
      background-color: $dark;
      position: relative;
      padding: 30px;
      border-radius: 10px;

      input, textarea {
        display: block;
        line-height: 1.5;
        width: 100%;
        font-size: 1rem;
        height: 50px;
        padding-bottom: 10px;
        background: transparent;
        border: none;
        border-bottom: 1px solid #444;
        border-radius: 0;
        box-shadow: none;
        color: #495057;
         font-family: $primary-font;
        background-clip: padding-box;
        transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
        &:focus, &:active {
          border-bottom: 1px solid $accent;
          outline: none;
          transition: all 0.3s ease-in-out;
          background-color: transparent;
        }
      }
      textarea {
        height: 100px;
        margin: 50px 0;
        resize: vertical;

      }
      button {
        background-color: transparent;
        border: none;
        display: block;
        margin: auto;
        font-family: $primary-font;
        &:focus, &:active {
          outline: none;
          transition: all 0.3s ease-in-out;
        }
      }
      #success {
        width: 100%;
        color: $white;
        padding: 10px 10px;
        margin-bottom: 5px;
        font-size: 14px;
        text-align: center;
        i {
          padding-top: 5px;
          margin-right: 10px;
          margin-left: 5px;
        }
      }
    }

  }
</style>