<template>
  <div class="app">
    <Header />
    <Contents/>
    <Footer />

    <!-- <Swiper /> -->
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Contents from './views/GroupContent.vue';
// import Swiper from './components/Swiper.vue';

export default {
  components: {
    Header,
    Contents,
    Footer,
    // Swiper,
  }
};
</script>

<style>
.app {
  min-height: 100vh !important;
  /* Tambahkan gaya untuk aplikasi secara keseluruhan */
}
</style>
