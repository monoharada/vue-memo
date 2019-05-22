<style lang="scss">
  .layout-items {
    display: flex;
    &-left {
      flex-grow: 1;
      overflow: scroll;
    }
    &-right {
      border-left: 1px solid #bbb;
    }
  }
</style>

<template lang="pug">
  div.layout-items
    list-view.layout-items-left(
      :memos="sharedState.memos"
      @remove="remove"
      @select="select")
    router-view.layout-items-right(
      :memo="selectedMemo"
      @add="update"
      @cancel="cancel")
</template>

<script>
import ListView from '../components/ListView'
// import store from '../store'
export default {
  // data(){
  //   return{
  //     sharedState: store.state
  //   }
  // },
  // props: {
  //   memos:Array
  // },
  computed:{
    selectedMemo(){
      const id = this.$route.params.id
      if(id !== undefined) {
        const memo = this.sharedState.memos.find((memo) =>{
          return memo.id === parseInt(id,0)
        })
        return memo
      }
      // if(this.$route.params.id !== undefined){ // id がある場合は `/items/:id` へのアクセス
      //   const id = parseInt(this.$route.params.id, 10)
      //   const memo = this.memos.find((memo) => {
      //     return memo.id === id
      //   })
      //   return memo // id が一致するメモのデータを返す
      // }
    },
    sharedState() {
      return this.$store.state
    }

     },
  methods:{
    remove(id){
      this.$store.commit('removeMemo', id)
      // store.actions.removeMemo(id)
      // this.$emit('remove', id)
    },
    select(id){
      this.$router.push({name:'edit', params:{id}})
    },
    update(data){
      this.$store.commit('updateMemo', data)
      // store.actions.updateMemo(data)
      // this.$emit('update',data)
      this.$router.push({name: 'items'})
    },
    cancel(){
      this.$router.push({name:'items'})
    }
  },
  components:{
    ListView
  }

}
</script>

