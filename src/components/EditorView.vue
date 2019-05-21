<style lang="scss" scoped>
  input:disabled {
    border-color: transparent;
  }
</style>

<template lang="pug">
  .editor-view
    div
      label 内容：
      input(v-model="input.text" placeholder="メモのタイトル")
    div
      label 日付：
      input(type="date" v-model="input.date")
    div
      label タグ：
      input(v-model="input.tags" placeholder="空白区切りで指定")
    div
      button(@click="cancel" v-if="memo") 戻る
      button(@click="save") 保存
</template>


<script lang="babel">
export default{
    props: {
      memo: Object
    },
    data() {
      return {
        input: {
          text: '',
          date: '',
          tags: ''
        }
      }
    },
    computed: {
      tagsArr() {
        return this.input.tags.trim() !== '' ? this.input.tags.trim().split(/\s+/) : []
      }
    },
    methods: {
      save() {
        const data = Object.assign({}, this.input, {tags: this.tagsArr})
        this.$emit('add', data)
      },
      cancel() {
        this.$emit('cancel')
      },
      setMemo() {
        if (this.memo) {
          Object.assign(this.input, this.memo, {tags: this.memo.tags.join(' ')})
        }
      }
    },
    created() {
      this.setMemo()
    },
    watch: {
      memo: 'setMemo'
    }
  }
</script>
