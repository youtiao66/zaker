<template>
  <div class="titlebar-container">
    <div class="titlebar-left">
      <div class="titlebar-icon titlebar-home"></div>
    </div>
    <div class="titlebar-body">
      <div class="titlebar-content">
        <div class="titlebar-logo"></div>
        <div class="titlebar-title">热点</div>
      </div>
    </div>
    <div class="titlebar-right">
      <div class="titlebar-icon titlebar-nav"></div>
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
@import "~assets/style/base/fn.less";

.titlebar-container {
  position: relative;
  width: 100%;
  height: @titlebarHeight;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.12);
  background: #fff;
}
.titlebar-body {
  padding: 0 .5rem;
}
.titlebar-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: @titlebarHeight;
}
.titlebar-logo {
  width: .16rem;
  height: .16rem;
  background: url(~assets/img/top_logo.png) no-repeat center;
  background-size: contain;
}
.titlebar-title {
  margin-left: .07rem;
  font-size: .14rem;
}
.titlebar-left,
.titlebar-right {
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
}
.titlebar-left {
  left: .1rem;
}
.titlebar-right {
  right: .1rem;
}
.titlebar-icon {
  width: .32rem;
  height: .32rem;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
}
.titlebar-home {
  background-image: url(~assets/img/top_home.png);
}
.titlebar-nav {
  background-image: url(~assets/img/top_nav_open.png);
}
</style>


