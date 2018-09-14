<template>
  <div class="news-cell">
    <div class="news-body">
      <div class="news-content">
        <p class="news-title">洪泽湖大闸蟹节活动现场 警方击落两架无人机</p>
        <p class="news-author">
          <span>洪泽新闻网</span>
          <span>2小时前</span>
          <img class="news-icon" src="//zkres.myzaker.com/data/image/mark2/daily_morning_2x.png?v=2015061216">
        </p>
      </div>
    </div>
    <div class="news-footer">
      <div class="news-thumbnail"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
}
</script>
<style lang="less" scoped>
@import "../assets/style/base/fn.less";

.news-cell {
  position: relative;
  display: flex;
  padding: .18rem .2rem;
}
.news-body {
  flex: 1;
}
.news-title {
  margin-bottom: .05rem;
  font-size: .17rem;
  line-height: 1.5;
  .ellipsisLn(2);
}
.news-author {
  font-size: .12rem;
  line-height: 1.1;
  color: #999;

  span {
    margin-right: .06rem;
  }

  .news-icon {
    display: inline-block;
    height: .13rem;
    vertical-align: middle;
  }
}
.news-footer {
  margin-left: .2rem;
}
.news-thumbnail {
  width: 1.1rem;
}
</style>

