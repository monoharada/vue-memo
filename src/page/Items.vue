<template lang="pug">
  div
    list-view(:memos="memos" @remove="remove")
</template>

<script>
import ListView from '../components/ListView'
export default {
  props: {
    memos:Array
  },
  methods:{
    remove(id){
      this.$emit('remove', id)
    }
  },
  components:{
    ListView
  }

}
</script>

