<style scoped lang="scss">
  .menu {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    background-color: #555;
    color: #fff;
    a {
      color: inherit;
      text-decoration: none;
      display: inline-block;
      padding: 10px;
      font-weight: normal;
      font-size: 14px;
      &:link {
        color: inherit;
      }
    }
    a.router-link-active {
      background-color: #fcfcfc;
      color: #555;
    }
  }
</style>

<template lang="pug">
  nav.menu
    router-link(:to="{name: 'root'}" exact) 最新
    router-link(:to="{name: 'items'}") 一覧
    router-link(:to="{name: 'add'}") 追加
</template>
