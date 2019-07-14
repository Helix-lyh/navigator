<template>
  <div class="website">
    <el-card class="website-card" shadow="hover" @click.native="clickHandler">
      <div class="website-avatar">
        <el-avatar :size="55" :src='iconUrl' @error="errorHandler()" />
      </div>
      <div class="website-desc">
        <span>{{websiteName}}</span>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Website',
  props: {
    websiteName: String,
    websiteUrl: String,
    iconUrl: {
      default: 'https://static.easyicon.net/preview/119/1196580.gif',
      type: String
    },
    loginParams: Object
  },
  methods: {
    errorHandler () {
      console.log('website errorHandler')
      this.iconUrl = 'https://static.easyicon.net/preview/121/1217325.gif'
      return true
    },
    clickHandler () {
      console.log('clickHandler', this.websiteUrl)
      window.open(this.websiteUrl)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .website{
    width: 95%;
    margin-top: 5px;
  }
  .website-card:hover >>> {
    cursor:pointer;
    -webkit-box-shadow:0 3px 15px 0 rgba(0,0,0,.3);
    box-shadow:0 3px 15px 0 rgba(0,0,0,.3);
    border-radius:5px
  }
  .website-card{
    border-radius:5px
  }
  .website-avatar{
    float: left;
    padding-bottom: 5px;
  }
  .website-desc{
    font-size: 16px;
    text-align: -webkit-center;
    padding-top: 20px;
  }
</style>
