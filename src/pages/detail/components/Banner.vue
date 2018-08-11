<template>
    <div class="banner">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1805/ab/ab4fccbc392da994a3.water.jpg_600x330_a90c3fe9.jpg">
      <div class="banner-info">
        <div class="banner-title">观澜山水田园水上乐园</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe632;</span>39</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'DetailBanner'
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
        .banner-title
          flex:1
          font-size:.32rem
          padding:0 .2rem
        .banner-number
          margin-top:.2rem
          padding:0 .4rem
          height:.32rem
          line-height:.32rem
          border-radius:.2rem
          background:rgba(0, 0, 0, .8)
          font-size:.24rem
            .banner-icon
              font-size:.24rem

</style>
