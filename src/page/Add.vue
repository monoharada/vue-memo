<template lang="pug">
  div
    editor-view(@add="add")
</template>

<script>
import EditorView from '../components/EditorView'
import store from '../store'
export default {
  methods:{
    add(data){
      store.actions.addMemo(data)
      // this.$emit('add',data)
      this.$router.push({name:'items'}) //追加処理のあとに`/items`にナビゲーションする
    }
  },
  components:{
    EditorView
  }
}
</script>


