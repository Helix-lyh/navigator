<template>
  <el-card class="website-set">
    <el-row>
      <el-col :span="2">
        <h3 class="card-title">{{ setName }}</h3>
      </el-col>
      <el-col :span="22">
        <el-row>
          <el-col :span="4" class="website-col" v-for="website in setData" :key="website.websiteName">
            <WebSite v-if="website.envList.length>0"
                     class="website-card"
                     :iconUrl="website.iconUrl"
                     :websiteName="website.websiteName"
                     :websiteUrl="website.websiteUrl"
                      :envList="website.envList"/>

            <WebSiteNoEnv v-else
                          class="website-card"
                          :iconUrl="website.iconUrl"
                          :websiteName="website.websiteName"
                          :websiteUrl="website.websiteUrl"/>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-card>
</template>

<script>
import WebSite from '@/components/WebSite'
import WebSiteNoEnv from '@/components/WebSiteNoEnv'

export default {
  name: 'WebSiteSet',
  components: {
    WebSite,
    WebSiteNoEnv
  },
  props: {
    setName: String,
    setData: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  watch: {
    setData () {
      console.log('hello world')
      console.log(this.setData)
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
