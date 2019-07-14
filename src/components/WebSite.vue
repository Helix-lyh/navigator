<template>
  <el-dropdown class="website-dropdown">
      <div class="website">
        <el-card class="website-card" shadow="hover">
          <div class="website-avatar">
            <el-avatar :size="55" :src='iconUrl' @error="errorHandler"/>
          </div>
          <div class="website-desc">
            <span>{{websiteName}}</span>
          </div>
        </el-card>
      </div>
    <div v-show="false">
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item v-for="env in envList" :key="env" class="website-dropdown-menu" @click.native="clickHandler(env)">
        {{env + '环境'}}
      </el-dropdown-item>
    </el-dropdown-menu>
  </div>
  </el-dropdown>

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
    envList: {
      default: function () {
        return []
      },
      type: Array
    },
    loginParams: Object
  },
  methods: {
    errorHandler () {
      console.log('website errorHandler')
      this.iconUrl = 'https://static.easyicon.net/preview/121/1217325.gif'
      return true
    },
    clickHandler (env) {
      console.log('clickHandler', this.websiteUrl, 'env', env)
      var envNum = env.charAt(env.length - 1)
      window.open(this.websiteUrl.replace(new RegExp('lctsres[1-6]{1}'), 'lctsres' + envNum))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .website-dropdown{
    display: block;
    width: 95%;
    margin-top: 5px;
  }
  .website-dropdown-menu{
    width: 6rem;
    text-align: center;
  }
  .website-card:hover >>> {
    cursor:pointer;
    -webkit-box-shadow:0 3px 15px 0 rgba(0,0,0,.3);
    box-shadow:0 3px 15px 0 rgba(0,0,0,.3);
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
  .website-card{
    border-radius:5px
  }
</style>
