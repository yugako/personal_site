<template>
  <section class="contact">
    <div class="container">
      <g-title class='contact-title' text='Contact' />
      <form @submit.prevent="handleSubmit" data-netlify data-netlify-honeypot="bot-field" method="post" name='contact-form' class="contact-form" id="contact-form">
      	<input type="hidden" name="form-name" value="contact-form" />
          <div class="row">
            <div class="col-lg-6 col-sm-12">
                <input type="text" required v-model='form.name' name="name" id="name" placeholder="Name *">
            </div>
            <div class="col-lg-6 col-sm-12">
                <input type="email" required v-model='form.email' name="email" id="email" placeholder="Email *">
            </div>
            <div class="col-lg-12 col-sm-12">
                <textarea name="note" required v-model='form.note' id="note" placeholder="Your Message"></textarea>
            </div>
            <div class="col-lg-12 col-sm-12 text-center">
            	<div id="loader" v-if='loader'>
                    <i class="fas fa-sync"></i>
                </div>

    
                <button type="submit" class="g-button">Send Message</button>
                
            </div>
            <div class="col-lg-12 col-sm-12">
              <div class="error-messages">
                <div id="success" v-if='success'>
                  <i class="far fa-check-circle"></i>Thank you, your message has been sent.
                </div>
                <div id="error" v-if='fail'>
                  <i class="far fa-times-circle"></i>Error occurred while sending email. Please try again later.
                </div>
              </div>
            </div>
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
        fail: false,
        loader: false,
        form: {
        	name: '',
	        email: '',
	        note: '',
        }
       
      }
    },
    methods: {
      encode(data) {
	      return Object.keys(data)
	        .map(
	          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
	        )
	        .join('&');
	    },
	    handleSubmit() {
	    	this.loader = true;
		    fetch('/', {
		        method: 'POST',
		        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		        body: this.encode({ 'form-name': 'contact-form', ...this.form }),
		    })
	        .then(() => {
	        	this.loader = false;
	        	this.success = true;
	        })
	        .then(() => {
	        	setTimeout(() => {
	        		this.success = false;

	        		this.form.name = '';
	        		this.form.email = '';
	        		this.form.note = '';
	        	}, 5000);
	        })
	        .catch(error => {
            this.fail = true;
            setTimeout(() => this.fail = false, 5000)
	        });
	      
	    },
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
    padding-bottom: 90px;
    @include md-size-max {
      padding-top: 40px;
      padding-bottom: 80px;
    }
    &-title {
      margin-bottom: 80px;
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
        margin: 50px 0 20px;
        resize: vertical;

      }
      button {
        background-color: transparent;
        border: none;
        display: block;
        margin: auto;
        margin-bottom: 20px;
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
      	#error {
		    width: 100%;
		    color: $white;
		    padding: 10px 10px;
		    margin-bottom: 5px;
		    font-size: 14px;
		    text-align: center;

		    i {
		        color: #ca1d1d;
		        padding-top: 5px;
		        margin-right: 10px;
		        margin-left: 5px;
		    }
		}
		#loader {
			text-align: center;
			margin-bottom: 20px;
			i {
				display: inline-block;
			    font-size: 23px;
			    color: $white;
			    -webkit-animation: rotating linear 2s infinite;
			    animation: rotating linear 2s infinite;

			}
		}
		/* Animation rotating */ 
		@-webkit-keyframes rotating {
			from {
				-webkit-transform: rotate(0deg);
						transform: rotate(0deg);
			}
			to {
				-webkit-transform: rotate(360deg);
						transform: rotate(360deg);
			}
		}

		@keyframes rotating {
			from {
				-webkit-transform: rotate(0deg);
						transform: rotate(0deg);
			}
			to {
				-webkit-transform: rotate(360deg);
						transform: rotate(360deg);
			}
		}
    }

  }
</style>