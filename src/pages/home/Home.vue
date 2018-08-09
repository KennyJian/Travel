<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>test remote 3</div>
  </div>
</template>

<style>
</style>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>
