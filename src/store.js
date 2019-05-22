// store.jsは状態を格納するstateと状態を変更するactionsの2つを、まとめてexportする

const state = {
    memos: []
}
// メモアプリケーション全体として必要な情報はmemosのみになります。ほかの状態はコンポーネントのプライベートな状態として定義します。
const util = {
    // memos の中から id が一致するメモの index を返す
    findInxex(memos, id) {
        const targetId = parseInt(id, 10)
        return memos.findIndex((memo) => {
            return memo.id === targetId
        })
    }
}
// utilに定義する関数はstateを直接参照せずに、引数として必要な値を受け取るようにしておくと、より使い回しがしやすくなる
const debug = process.env.NODE_ENV !== 'production'

const mutations = {
    addMemo(state, newMemo) {
        // debug && console.log(`addMemo triggered with`, newMemo)
        // memos の中のメモで一番大きい id に 1 を足した値を取得する
        newMemo.id = state.memos.reduce((id, memo) => {
            return id < memo.id ? memo.id : id
        }, 0) + 1
        state.memos.push(newMemo)
    },
    removeMemo(state, id) {
        // debug && console.log(`removeMemo triggered with`, id)
        // const targetId = parseInt(id, 10)
        // memos の中から id が一致するメモの index を取得する
        // const index = state.memos.findIndex((memo) => {
        //     return memo.id === targetId
        // })
        // state.memos.splice(index, 1)
        const index = util.findInxex(state.memos, id)
        state.memos.splice(index, 1)
    },
    updateMemo(state, memo) {
        // debug && console.log(`updateMemo triggered with`, memo)
        // const taregeId = parseInt(memo.id, 10)
        // memos の中から id が一致するメモの index を返す
        // const index = state.memos.findIndex((memo) => {
        //     return memo.id === targetId
        // })
        // state.memos.splice(index, 1, memo)
        const index = util.findInxex(state.memos, memo.id)
        state.memos.splice(index, 1, memo)
    }
}
export default {
    state,
    mutations
}



