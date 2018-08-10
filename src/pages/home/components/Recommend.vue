<template>
    <div>
      <div class="recommend-title">
        <img class="title-photo" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png">
        猜你喜欢
      </div>
      <ul>
        <li class="item border-bottom" v-for="item of list" :key="item.id">
          <img class="item-img" :src="item.imgUrl">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <div class="item-desc">{{item.desc}}</div>
          <button class="item-button">查看详情</button>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style scoped lang="stylus">
  @import "~styles/mixins.styl"
  .recommend-title
    margin-top:.2rem
    line-height:.8rem
    background:#eee
    text-indent:.2rem
    .title-photo
      width:0.3rem
      height:0.3rem
  .item
    overflow:hidden
    display:flex
    height:1.9rem
    .item-img
      width:1.7rem
      height:1.7rem
      padding:.1rem
    .item-info
      flex:1
      padding:.1rem
      min-width:0
      .item-title
        line-height:.54rem
        font-size:.32rem
        ellipsis()
      .item-desc
        line-height:.4rem
        color:#ccc
        ellipsis()
      .item-button
        line-height:.44rem
        margin-top:.16rem
        background:#ff9300
        padding:0 .2rem
        border-radius: .06rem
        color:#fff
</style>
