// store.jsは状態を格納するstateと状態を変更するactionsの2つを、まとめてexportする

const state = {
    memos: []
}
// メモアプリケーション全体として必要な情報はmemosのみになります。ほかの状態はコンポーネントのプライベートな状態として定義します。

const action = {
    addMemo(newMemo){
        debug && console.log(`addMemo triggered with`, newMemo)
        // memos の中のメモで一番大きい id に 1 を足した値を取得する
        newMemo.id = state.memos.reduce((id,memo) =>{
            return id < memo.id ? memo.id :id
        }, 0) + 1
        state.memos.push(newMemo)
    },
    removeMemo(id){
        const targetId = parseInt(id, 10)
        // memos の中から id が一致するメモの index を取得する
        const index = state.memos.findIndex((memo) => {
            return memo.id === targetId
        })
        state.memos.splice(index, 1)
        },
        updateMemo(memo){
            const taregeId = pareseInt(memo.id, 10)
            // memos の中から id が一致するメモの index を返す
            const index = state.memos.findIndex((memo) => {
                return memo.id === targetId
            })
            state.memos.splice(index, 1, memo)
        }
    }

const debug = process.env.NODE_ENV !== 'production'

const action = {
    addMemo(newMemo) {
        debug && console.log(`addMemo triggered with`, newMemo)
    }
}