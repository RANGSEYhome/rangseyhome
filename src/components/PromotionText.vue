<template>
  <section class="promo-section theme-bg-light py-5 text-center">
    <div class="container single-col-max-width">
      <h2 class="title">{{$t('WantMe')}}</h2>
      <p>
        {{$t('PromoTextDesc')}}
      </p>
      <div class="text-center">
        <router-link class="btn btn-primary" to="/contact"
          ><i class="fas fa-paper-plane me-2"></i>{{$t('GetInTouch')}}</router-link
        >
      </div>
    </div>
    <!--//container-->
  </section>
  <!--//promo-section-->
</template>
