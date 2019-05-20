// store.jsは状態を格納するstateと状態を変更するactionsの2つを、まとめてexportする

const state = {
    memos: []
}
// メモアプリケーション全体として必要な情報はmemosのみになります。ほかの状態はコンポーネントのプライベートな状態として定義します。

const action = {
    addMemo(newMemo){
        // memos の中のメモで一番大きい id に 1 を足した値を取得する
        newMemo.id = state.memos.reduce((id,memo) =>{
            return id < memo.id ? memo.id :id
        }, 0) + 1
        state.memos.push(newMemo)
    },
    
}