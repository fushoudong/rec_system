<template>
  <div class="hello">
    <h1>{{ search_text }}</h1>
    <div style="margin-left: 15px; width: 30%">
      <el-input v-model="search_text" placeholder="请输入要搜索的内容">
        <template slot="append">
          <el-button type="primary" icon="el-icon-search">搜索</el-button>
        </template>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "rec sys",
      search_text: "搜索的内容",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
