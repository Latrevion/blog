<template>
  <div>
    <Loading v-if="hide"></Loading>
    <div id="detail" v-else>
    <section class="user-info">
      <router-link :to="`/user/${user.id}`" class="avatar"><img :src="user.avatar" :alt="user.username" :title="user.username" ></router-link>
      <h3>{{title}}</h3>
      <p><router-link :to="`/user/${user.id}`">{{user.username}}</router-link> 发布于{{friendlyDate(createdAt)}}</p>
    </section>
    <section class="article" v-html="markdown">
    </section>
  </div>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
