<template lang="pug">
  .list-item(@click="select(memo.id)")
    div
      span id
      | ：
      span {{memo.id}}
    div
      span text
      | ：
      span {{memo.text}}
    div
      span date
      | ：
      span {{memo.date}}
    div
      span tags
      | ：
      span
        span(v-for="tag in memo.tags") {{tag}}
    div
      button(@click="remove(memo.id)")
        | 削除
</template>


<script lang="babel">
export default{
  props: {
    memo: Object
  },
  methods: {
    remove(id) {
      this.$emit('remove', id)
    },
    select(id){
      this.$emit('select',id)
    }
  }
}
</script>
