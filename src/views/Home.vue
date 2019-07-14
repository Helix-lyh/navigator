<template>
  <div class="home">
    <el-container>
      <el-header class="header">
        <Header :webName="'测试地图'"></Header>
      </el-header>
      <el-main class="main">
        <WebSiteSet class="website-set" :setName="'常用网站'" :setData="moreUse"></WebSiteSet>
        <WebSiteSet class="website-set" :setName="'业务后台'" :setData="work"></WebSiteSet>
        <WebSiteSet class="website-set" :setName="'测试网站'" :setData="tester"></WebSiteSet>
        <WebSiteSet class="website-set" :setName="'其他网站'" :setData="other"></WebSiteSet>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WebSiteSet from '@/components/WebSiteSet'
import { fetchAllBookmarks } from '@/api/bookmarks'

export default {
  name: 'home',
  components: {
    Header,
    WebSiteSet,
    Footer
  },
  data () {
    return {
      listLoading: false,
      moreUse: undefined,
      work: undefined,
      tester: undefined,
      other: undefined
    }
  },
  created () {
    this.initSites()
  },
  methods: {
    initSites () {
      console.log('initSites')
      this.listLoading = true
      fetchAllBookmarks().then(response => {
        this.moreUse = response.data.moreUse
        this.work = response.data.work
        this.tester = response.data.tester
        this.other = response.data.other
        this.other.forEach(element => {
          console.log('element.envList.length', element.envList.length)
        })
      })
    },
    errorHandler () {
      return true
    }
  }
}
</script>

<style scoped>
  .header {
    top: 0;
    padding: 0;
    position: fixed;
    width: 100%;
    height: 60px;
    z-index: 1;
  }
  .main{
    padding-top: 65px;
  }

  .website-set >>> .el-card__body {
    padding: 10px;
  }

  .website-set {
    margin-top: 10px;
    margin-bottom: 10px;
  }

</style>
