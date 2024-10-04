<template>
  <div class="main-wrapper">
    <section class="cta-section theme-bg-light py-5">
		    <div class="container text-center single-col-max-width">
			    <h2 class="heading">{{$t('Contact')}}</h2>
			    <div class="intro">
			    <p>{{ $t('HireMe') }} <a  class="text-link" href="mailto:info.rangsey@gmail.com">info.rangsey@gmail.com</a></p>
			    <p>{{ $t('ConnectMe') }}</p>
			    <SocialListNoBg></SocialListNoBg>
                </div>
			</div><!--//container-->
    </section>
    <section class="contact-section px-3 py-5 p-md-5">
		    <div class="container">
			    <form id="contact-form" class="contact-form col-lg-8 mx-lg-auto" method="post" action="">
			        <h3 class="text-center mb-3">{{$t('GetInTouch')}}</h3>
			        <div class="row g-3">                                                           
		                <div class="col-12 col-md-6">
		                    <label class="sr-only" for="cname">Name</label>
		                    <input type="text" class="form-control" id="cname" name="name" :placeholder="$t('Name')" minlength="2" required="" aria-required="true">
		                </div>                    
		                <div class="col-12 col-md-6">
		                    <label class="sr-only" for="cemail">Email</label>
		                    <input type="email" class="form-control" id="cemail" name="email" :placeholder="$t('Email')" required="" aria-required="true">
		                </div>
		                <!-- <div class="col-12">
			                <select id="services" class="form-select" name="services">
								<option selected>Select a service package you're interested in...</option>
								<option value="basic">Basic</option>
								<option value="standard">Standard</option>
								<option value="premium">Premium</option>
								<option value="not sure">Not sure</option>
							</select>
							<div class="mt-2">
							    <small class="form-text text-muted pt-1"><i class="fas fa-info-circle me-2 text-primary"></i>Want to know what's included in each package? Check the <a class="text-link" href="services.html" target="_blank">Services &amp; Pricing</a> page.</small>
							</div>
						</div> -->
		                <div class="col-12">
		                    <label class="sr-only" for="cmessage">Your message</label>
		                    <textarea class="form-control" id="cmessage" name="message" :placeholder="$t('EnterMessage')" rows="10" required="" aria-required="true"></textarea>
		                </div>
		                 <div class="form-group col-12">
		                    <button type="submit" class="btn btn-block btn-primary py-2">{{$t('SendNow')}}</button>
		                </div>                           
		            </div><!--//form-row-->
		        </form>
		    </div><!--//container-->
	    </section>
  </div>
  <!--//main-wrapper-->
</template>

<script>
import SocialListNoBg from '@/components/SocialListNoBg.vue';

export default{
	components:{
		SocialListNoBg,
	}
}
</script>
