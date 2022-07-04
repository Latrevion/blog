<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input maxlength="50" v-model="title" placeholder="请输入文章标题"></el-input>
    <p class="msg">限50个字</p>
    <h3>内容简介</h3>
    <el-input  maxlength="100" type="textarea" v-model="description" :autosize="{ minRows: 1, maxRows: 6}" placeholder="请输入内容简介"></el-input>
    <p class="msg">限100个字</p>
    <h3>文章内容</h3>
    <p class="msg">至少200个字</p>
    <el-input type="textarea" v-model="content" :autosize="{ minRows: 4, maxRows: 30}" placeholder="请输入文章内容"></el-input>
    <Emoji></Emoji>
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onEdit">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style scoped src="./template.less"></style>
