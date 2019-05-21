<template lang="pug">
  div
    list-view(
      :memos="sharedState.memos" 
      @remove="remove" 
      :count="privateState.count" 
      :sort="privateState.sort")
    router-link(:to="{name: 'items'}") すべて見る
</template>

<script>
import ListView from '../components/ListView'
import store from '../store'
export default {
  data(){
    return {
      sharedState: store.state,
      privateState: {
        count: 3,
        sort: 'latest'
      }
    }
  },
  // props:{
  //   memos:Array
  // },
  methods:{
    remove(id){
      store.actions.removeMemo(id)
      // this.$emit('remove', id)
    }
  },
  components:{
    ListView
  }
}
</script>


