<template>
  <div>
    <el-card class="header-card">
      <div class="website-icon">
        <el-avatar :size="60" src="https://empty" @error="errorHandler">
          <img src="https://static.easyicon.net/preview/123/1231081.gif"/>
        </el-avatar>
      </div>
      <div class="website-name"><h1>{{ webName }}</h1></div>
      <div class="avatar">
        <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
          <div class="avatar-wrapper">
            <img src="https://www.easyicon.net/api/resizeApi.php?id=570007&size=128" class="user-avatar">
            <span>&nbsp;</span>
            <i class="el-icon-caret-bottom">&nbsp;</i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/profile/index">
              <el-dropdown-item>个人资料</el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>回到首页</el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    webName: String
  },
  methods: {
    errorHandler () {
      return true
    },
    logout () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-card >>> .el-card__body{
    height: 60px;
    padding: 0;
  }
  .website-icon{
    float:left;
    margin-top: 3px;
    margin-bottom: 3px;
    margin-left: 5px;
  }
  .website-name{
    float:left;
    margin-bottom: 5px;
    margin-left: 10px;
    max-height: 60px;
  }
  .avatar{
    float:right;
  }
  .avatar-container {
    margin-right: 30px;
  }
  .avatar-wrapper {
    margin-top: 10px;
    position: relative;
  }
  .user-avatar {
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 25px;
  }
  .el-icon-caret-bottom {
    cursor: pointer;
    position: absolute;
    right: -20px;
    top: 25px;
    font-size: 12px;
  }
</style>
