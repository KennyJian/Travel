<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1805/ab/ab4fccbc392da994a3.water.jpg_600x330_a90c3fe9.jpg">
      <div class="banner-info">
        <div class="banner-title">观澜山水田园水上乐园</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe692;</span>39</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['//img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_600x330_1108fbd3.jpg',
        '//img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_600x330_f2f668e4.jpg']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleClose () {
      this.showGallary = false
    }
  }
}
</script>

<style scoped lang="stylus">
  .banner
    position:relative
    overflow:hidden
    height:0
    padding-bottom:55%
    .banner-img
      width:100%
    .banner-info
      display:flex
      position:absolute
      left:0
      right:0
      bottom:0
      line-height:.6rem
      color:#fff
      background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex:1
        font-size:.32rem
        padding:0 .2rem
      .banner-number
        height:.32rem
        line-height:.32rem
        margin-top:.14rem
        padding:0 .4rem
        border-radius:.2rem
        background:rgba(0, 0, 0, .8)
        font-size:.24rem
        .banner-icon
          font-size:.24rem

</style>
