<template>
  <div>
    <div class="page-header">
      <titlebar/>
    </div>
    <div class="page-content">
      <news/>
    </div>
  </div>
</template>
<script>
import titlebar from '../components/titlebar';
import news from '../components/news';

export default {
  components: {
    titlebar,
    news,
  }
}
</script>
<style lang="less" scoped>
@import "../assets/style/base/fn.less";

.page-content {
  padding-top: @titlebarHeight;
}
</style>


